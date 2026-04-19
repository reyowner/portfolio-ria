"use client";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Users, Trophy, Heart, Calendar, TrendingUp } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Activities = () => {
  const [coCurricularPage, setCoCurricularPage] = useState(1);
  const [extraCurricularPage, setExtraCurricularPage] = useState(1);
  const [overallPage, setOverallPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(
    window.innerWidth >= 1024 ? 2 : 1,
  );
  const [isMobile, setIsMobile] = useState(false);
  // Drag state for each section
  const coDragStartX = useRef<number | null>(null);
  const coDragCurrentX = useRef<number | null>(null);
  const [coDragOffset, setCoDragOffset] = useState(0);
  const [coIsDragging, setCoIsDragging] = useState(false);
  const [coIsTransitioning, setCoIsTransitioning] = useState(false);
  const [coTransitionDirection, setCoTransitionDirection] = useState<
    "left" | "right" | null
  >(null);
  const exDragStartX = useRef<number | null>(null);
  const exDragCurrentX = useRef<number | null>(null);
  const [exDragOffset, setExDragOffset] = useState(0);
  const [exIsDragging, setExIsDragging] = useState(false);
  const [exIsTransitioning, setExIsTransitioning] = useState(false);
  const [exTransitionDirection, setExTransitionDirection] = useState<
    "left" | "right" | null
  >(null);
  const ovDragStartX = useRef<number | null>(null);
  const ovDragCurrentX = useRef<number | null>(null);
  const [ovDragOffset, setOvDragOffset] = useState(0);
  const [ovIsDragging, setOvIsDragging] = useState(false);
  const [ovIsTransitioning, setOvIsTransitioning] = useState(false);
  const [ovTransitionDirection, setOvTransitionDirection] = useState<
    "left" | "right" | null
  >(null);
  // For velocity-based swipe
  const coDragStartTime = useRef<number | null>(null);
  const exDragStartTime = useRef<number | null>(null);
  const ovDragStartTime = useRef<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth >= 1024 ? 2 : 1);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const coCurricularActivities = [
    {
      title: "COED Jumpstart 2024",
      role: "Organizer, Creatives Committee",
      period: "January 2025",
      description:
        "An annual orientation event for incoming students of the College of Education. As part of the Creatives Committee, I was responsible for designing and producing visual materials used in promotions and during the event. I contributed to the overall aesthetic and branding of the program, helping to create a welcoming and engaging atmosphere for the freshmen.",
      image: "/activities/co-curricular/COED-Jumpstart-2024.jpg",
      caption:
        "Holding a poster of Jumpstart 2024, designed by my committee, the creatives committee",
    },
    {
      title:
        "COEDunong 2024 Academic Contest - Instructional Material Making Contest",
      role: "Champion",
      period: "November 2024",
      description:
        "COEDunong is an academic competition open to students of the College of Education. In 2024, I was awarded Champion in the Instructional Material Making Contest, showcasing creativity and pedagogical skill in designing effective, learner-centered teaching materials aligned with curriculum standards.",
      image: "/activities/co-curricular/COEDunong-2024.jpg",
      caption: "Awarded as a winner during the COEDunong 2024 Awards",
    },
    {
      title: "Ilog Pasiglahin",
      role: "Organizer/Participant",
      period: "September 2024",
      description:
        "An environmental awareness event focused on the preservation and rehabilitation of the Pasig River and other bodies of water. As both an organizer and participant, I was involved in promoting sustainable practices and educating the community on how to care for our rivers through responsible waste management, conservation efforts, and civic engagement.",
      image: "/activities/co-curricular/Ilog-Pasiglahin.jpg",
      caption:
        "With the PUP Social Studies Guild during our participation in Ilog Pasiglahin",
    },
    {
      title: "COED Awards: Gawad Hiraya",
      role: "Awardee and Organizer",
      period: "August 2024",
      description:
        "During this prestigious event by the College of Education, I was recognized once again as a President's Lister while also serving as one of the organizers. Being on both sides—as an awardee and as part of the organizing team—made the experience even more fulfilling, as it symbolized both recognition and service.",
      image: "/activities/co-curricular/COED-Awards.jpg",
      caption:
        "Received my President's Lister award during the COED Awards: Gawad Hiraya",
    },
    {
      title: "PUP SSG 10th Anniversary and Recognition",
      role: "Awardee",
      period: "June 2024",
      description:
        "I was honored to be recognized as a President's Lister during the PUP SSG's 10th Anniversary and Recognition Ceremony. This achievement reflects the hard work and perseverance I've invested in balancing both academic and personal responsibilities.",
      image:
        "/activities/co-curricular/PUP-SSG-Anniversary-and-Recognition.jpg",
      caption:
        "Proudly holding my President's Lister award during the PUP SSG 10th Anniversary and Recognition Day",
    },
    {
      title: "EDTALK Series Webinar",
      role: "Participant",
      period: "November 2022, November 2023, November 2024",
      description:
        "The EDTALK Series is an annual webinar hosted by various organizations within PUP that highlights innovative strategies and methodologies in teaching. Attending this series consistently over the years has deepened my understanding of pedagogical practices and affirmed my commitment to becoming a more dynamic and responsive future educator.",
      image: "/activities/co-curricular/EDTALK-Series-Webinar.jpg",
      caption: "Official logo of the EDTalk Webinar Series",
    },
    {
      title:
        "University of the Philippines Open University: Massive Open Distance e-Learning in Introduction to Technology for Teaching and Learning",
      role: "Participant",
      period: "May-June 2024",
      description:
        "Completed an online course under UPOU's MODeL platform focused on foundational concepts and practical applications of technology integration in education. The course emphasized the role of digital tools in enhancing teaching and learning experiences, particularly in flexible and distance learning environments.",
      image: "/activities/co-curricular/UPOU-TTL2.jpg",
      caption:
        "Certificate of completion from UPOU's course: Introduction to Technology for Teaching and Learning",
    },
    {
      title:
        "NSTP-CWTS Outreach Program - 'This is Me!: Understanding Sexual, Gender Identity, and Puberty of the Youth'",
      role: "Committee Member",
      period: "July 2023",
      description:
        "This outreach program aimed to raise awareness about sex, gender identity, and the challenges faced by today's youth. As a member of the Program Committee, I helped in planning and organizing activities that encouraged safe and inclusive conversations around gender and puberty—highlighting the importance of education in dismantling stigma.",
      image: "/activities/co-curricular/NSTP-CWTS-Outreach-Program.jpg",
      caption:
        "Group photo with participants from our outreach program at Barangay 592, held in July 2023",
    },
    {
      title: "360Pilipinas Earth Day Celebration",
      role: "Participant",
      period: "April 2023",
      description:
        "As part of our CWTS class requirement in 2023, we participated in the 360Pilipinas Earth Day Celebration, a campaign that promotes a cleaner and greener environment. Though initially a class task, the experience opened our eyes to the importance of collective action in addressing environmental issues.",
      image: "/activities/co-curricular/360Pilipinas-Earth-Day.jpg",
      caption:
        "Engaged in an activity during the Earth Day Celebration organized by 360Pilipinas",
    },
    {
      title: "COED Jumpstart 2022",
      role: "Participant",
      period: "March 2023",
      description:
        "An orientation event designed specifically for the freshmen of the Polytechnic University of the Philippines – College of Education. As a participant, this event served as my official welcome to the college, giving me an overview of what to expect in my academic journey. It introduced me to the values, programs, and culture of the College of Education, and helped me feel more grounded and prepared as I began my path toward becoming a future educator.",
      image: "/activities/co-curricular/Jumpstart-2022.jpg",
      caption:
        "Logo of COED Jumpstart 2022, the annual college orientation program",
    },
  ];

  const extraCurricularActivities = [
    {
      title: "The Limestone",
      role: "Head Photojournalist",
      period: "2024 - 2026",
      description:
        "Contributes to the official student publication of the College of Education by capturing key moments during events, producing creative layouts, and designing visual content that supports journalistic storytelling and student-led publication releases.",
      image: "/activities/extra-curricular/Limestone.jpg",
      caption:
        "Featured in the pubmat as part of The Limestone's Editorial Board for the current publication year",
      impact: "Enhanced visual storytelling in student publications",
    },
    {
      title:
        "Bachelor of Elementary and Secondary Teaching Society (BEST Society)",
      role: "Public Relations Officer",
      period: "2024 - 2025",
      description:
        "Responsible for maintaining the organization's public presence through strategic communications, publication materials, and engagement across social media platforms. Ensures effective promotion of events and strengthens the organization's branding and visibility within and beyond the department.",
      image: "/activities/extra-curricular/BEST-2024.jpg",
      caption:
        "Introduced through a pubmat as one of the newly appointed officers of BEST Society for A.Y. 2024-2025",
      impact: "Improved organization's social media presence and engagement",
    },
    {
      title: "The PUP Social Studies Guild",
      role: "Finance Committee Officer",
      period: "2024 - 2025",
      description:
        "Handles budget proposals, financial documentation, and funding strategies for guild activities. Supports the organization in implementing educational and cultural programs aligned with the goals of the Social Studies discipline.",
      image: "/activities/extra-curricular/Social-Studies-Guild.jpg",
      caption:
        "Included in the official pubmat release for the newly elected officers of PUP Social Studies Guild",
      impact: "Streamlined financial processes for guild activities",
    },
    {
      title:
        "Bachelor of Elementary and Secondary Teaching Society (BEST Society)",
      role: "Member",
      period: "2023 - 2024",
      description:
        "Actively participated as a member of the department's mother organization, which aims to unify and support students under the Bachelor of Elementary and Secondary Teaching program through academic, leadership, and community-building initiatives.",
      image: "/activities/extra-curricular/BEST-2023.jpg",
      caption: "Formally presented in the membership pubmat of BEST Society",
      impact: "Contributed to academic and leadership development initiatives",
    },
    {
      title: "PUP College of Education Student Council",
      role: "Junior Council Officer",
      period: "2023 - 2024",
      description:
        "Served as a junior officer under the College of Education Student Council, contributing to student welfare initiatives, assisting in various council-led events, and participating in decision-making processes that addressed student concerns and campus activities.",
      image: "/activities/extra-curricular/PUP-COED-SC.jpg",
      caption:
        "Highlighted in a pubmat after being appointed as a Junior Council Officer under the PUP COED Student Council",
      impact: "Enhanced student welfare and campus activities",
    },
  ];

  const overallActivitiesEvent = [
    {
      title: "Tara, Basa! Tutoring Program",
      role: "Learning Facilitator",
      period: "May - June 2025",
      description:
        "Served as a tutor in the Tara, Basa! literacy program, which supports the reading development of early-grade learners. Facilitated reading sessions, monitored learner progress, and provided educational support to underserved communities.",
      image: "/activities/overall/Tara-Basa.jpg",
      caption:
        "Photo with my co-tutor and YDW mentor alongside our DepEd focal person during our deployment at F. Amorsolo Elementary School for Tara, Basa! tutoring program",
    },
    {
      title: "GTKY: Getting to Know You! - BEST Society General Assembly",
      role: "Organizer, Creatives Committee Head",
      period: "March 2025",
      description:
        "Led the creative direction and designed event materials for the BEST Society's general assembly. The event introduced the organization's goals and officers while strengthening bonds among members through engaging activities.",
      image: "/activities/overall/GTKY.jpg",
      caption:
        "Captured moment with the entire BEST Society during our GTKY: Getting to Know You gathering",
    },
    {
      title: "SSilakbo: Mid-Year General Assembly",
      role: "Logistics and Finance Committee Member",
      period: "February 2025",
      description:
        "A mid-year general assembly organized by the PUP Social Studies Guild to re-engage members and align organizational priorities. Assisted in event logistics and financial coordination to ensure smooth implementation.",
      image: "/activities/overall/SSilakbo.jpg",
      caption: "Group photo with SS3 during the SSILAKBO mid-year assembly",
    },
    {
      title: "COED Pinning Ceremony",
      role: "Partner Organization (The Limestone)",
      period: "January 2025",
      description:
        "Represented The Limestone, the official student publication of the College of Education, as a photographer and media partner for this formal event that recognizes education students' transition to internship and field practice.",
      image: "/activities/overall/COED-Pinning.jpg",
      caption:
        "Taking a photo of a graduating COED student during their photoshoot for the upcoming pinning ceremony",
    },
    {
      title: "COEDunong Academic Contest 2024",
      role: "Organizer",
      period: "November 2024",
      description:
        "Co-organized by the BEST Society, PUP Social Studies Guild, and The Limestone, this interdepartmental academic contest aimed to promote academic excellence, instructional innovation, and healthy competition among students in the College of Education.",
      image: "/activities/overall/COEDunong.jpg",
      caption:
        "Facilitating the attendance of participants during the Social Science Quiz Bee",
    },
    {
      title:
        "COEDyssey: Forging a Legacy through Unified Vision and Leadership",
      role: "Organizer (BEST Society)",
      period: "November 2024",
      description:
        "A leadership seminar for aspiring student leaders in the College of Education. Organized by the BEST Society, the event fostered unity among student leaders through collaborative workshops, vision-building activities, and values-centered dialogue.",
      image: "/activities/overall/COEDyssey.jpg",
      caption:
        "Photo with NSTP, FBTO, LISSO, and BEST Society as core organizers of the COEDYSSEY Leadership Seminar",
    },
    {
      title: "Balik Sinta 2024",
      role: "Partner Organization (BEST Society, PUP Social Studies Guild)",
      period: "September 2024",
      description:
        "A welcome-back event held to mark the beginning of a new academic year. Participated as a partner organization through BEST Society and the PUP Social Studies Guild, helping create a festive and inclusive atmosphere for returning students.",
      image: "/activities/overall/Balik-Sinta.jpg",
      caption:
        "At the Balik Sinta event, stationed at our booth as part of BEST Society, one of the partner organizations",
    },
    {
      title: "Leadership Empowerment Talks 2024",
      role: "Organizer, Creatives Committee",
      period: "August 2024",
      description:
        "Organized by the BEST Society, this leadership seminar aimed to inspire and equip student-leaders with the essential skills and mindset for effective leadership. Contributed to the visual branding and creative outputs used throughout the event.",
      image: "/activities/overall/Leadership-Empowerment.jpg",
      caption:
        "Group photo with participants of the Leadership Empowerment Talks",
    },
    {
      title: "PUP Rainbow",
      role: "Partner Organization (BEST Society)",
      period: "June 2024",
      description:
        "A university-wide pride event celebrating gender diversity and equality. Represented the Bachelor of Elementary and Secondary Teaching Society (BEST Society) as a partner organization, supporting advocacy efforts for inclusion and LGBTQIA+ rights.",
      image: "/activities/overall/PUP-Rainbow.jpg",
      caption:
        "With fellow BEST Society members during our participation as a partner organization in PUP Rainbow 2024",
    },
  ];

  // Drag handlers for Co-curricular
  const handleCoDragStart = (e) => {
    setCoIsDragging(true);
    if ("touches" in e) {
      coDragStartX.current = e.touches[0].clientX;
    } else {
      coDragStartX.current = e.clientX;
    }
    coDragCurrentX.current = coDragStartX.current;
    coDragStartTime.current = Date.now();
  };
  const handleCoDragMove = (e) => {
    if (!coIsDragging || coDragStartX.current === null) return;
    let clientX;
    if ("touches" in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }
    coDragCurrentX.current = clientX;
    setCoDragOffset(clientX - coDragStartX.current);
  };
  const handleCoDragEnd = () => {
    if (
      !coIsDragging ||
      coDragStartX.current === null ||
      coDragCurrentX.current === null ||
      coDragStartTime.current === null
    ) {
      setCoIsDragging(false);
      setCoDragOffset(0);
      return;
    }
    const distance = coDragCurrentX.current - coDragStartX.current;
    const duration = Date.now() - coDragStartTime.current;
    const velocity = Math.abs(distance) / duration; // px/ms
    const threshold = 25;
    const velocityThreshold = 0.5; // px/ms
    let navigated = false;
    if (
      distance < -threshold ||
      (distance < 0 && velocity > velocityThreshold)
    ) {
      setCoCurricularPageAnimated(
        Math.min(
          Math.ceil(coCurricularActivities.length / itemsPerPage),
          coCurricularPage + 1,
        ),
      );
      navigated = true;
    } else if (
      distance > threshold ||
      (distance > 0 && velocity > velocityThreshold)
    ) {
      setCoCurricularPageAnimated(Math.max(1, coCurricularPage - 1));
      navigated = true;
    }
    setCoIsDragging(false);
    setCoDragOffset(0);
    coDragStartX.current = null;
    coDragCurrentX.current = null;
    coDragStartTime.current = null;
    // If not navigated, snap back with animation (already handled by transition class)
  };
  // Drag handlers for Extra-curricular
  const handleExDragStart = (e) => {
    setExIsDragging(true);
    if ("touches" in e) {
      exDragStartX.current = e.touches[0].clientX;
    } else {
      exDragStartX.current = e.clientX;
    }
    exDragCurrentX.current = exDragStartX.current;
    exDragStartTime.current = Date.now();
  };
  const handleExDragMove = (e) => {
    if (!exIsDragging || exDragStartX.current === null) return;
    let clientX;
    if ("touches" in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }
    exDragCurrentX.current = clientX;
    setExDragOffset(clientX - exDragStartX.current);
  };
  const handleExDragEnd = () => {
    if (
      !exIsDragging ||
      exDragStartX.current === null ||
      exDragCurrentX.current === null ||
      exDragStartTime.current === null
    ) {
      setExIsDragging(false);
      setExDragOffset(0);
      return;
    }
    const distance = exDragCurrentX.current - exDragStartX.current;
    const duration = Date.now() - exDragStartTime.current;
    const velocity = Math.abs(distance) / duration; // px/ms
    const threshold = 25;
    const velocityThreshold = 0.5; // px/ms
    let navigated = false;
    if (
      distance < -threshold ||
      (distance < 0 && velocity > velocityThreshold)
    ) {
      setExtraCurricularPageAnimated(
        Math.min(
          Math.ceil(extraCurricularActivities.length / itemsPerPage),
          extraCurricularPage + 1,
        ),
      );
      navigated = true;
    } else if (
      distance > threshold ||
      (distance > 0 && velocity > velocityThreshold)
    ) {
      setExtraCurricularPageAnimated(Math.max(1, extraCurricularPage - 1));
      navigated = true;
    }
    setExIsDragging(false);
    setExDragOffset(0);
    exDragStartX.current = null;
    exDragCurrentX.current = null;
    exDragStartTime.current = null;
    // If not navigated, snap back with animation (already handled by transition class)
  };
  // Drag handlers for Overall
  const handleOvDragStart = (e) => {
    setOvIsDragging(true);
    if ("touches" in e) {
      ovDragStartX.current = e.touches[0].clientX;
    } else {
      ovDragStartX.current = e.clientX;
    }
    ovDragCurrentX.current = ovDragStartX.current;
    ovDragStartTime.current = Date.now();
  };
  const handleOvDragMove = (e) => {
    if (!ovIsDragging || ovDragStartX.current === null) return;
    let clientX;
    if ("touches" in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }
    ovDragCurrentX.current = clientX;
    setOvDragOffset(clientX - ovDragStartX.current);
  };
  const handleOvDragEnd = () => {
    if (
      !ovIsDragging ||
      ovDragStartX.current === null ||
      ovDragCurrentX.current === null ||
      ovDragStartTime.current === null
    ) {
      setOvIsDragging(false);
      setOvDragOffset(0);
      return;
    }
    const distance = ovDragCurrentX.current - ovDragStartX.current;
    const duration = Date.now() - ovDragStartTime.current;
    const velocity = Math.abs(distance) / duration; // px/ms
    const threshold = 25;
    const velocityThreshold = 0.5; // px/ms
    let navigated = false;
    if (
      distance < -threshold ||
      (distance < 0 && velocity > velocityThreshold)
    ) {
      setOverallPageAnimated(
        Math.min(
          Math.ceil(overallActivitiesEvent.length / itemsPerPage),
          overallPage + 1,
        ),
      );
      navigated = true;
    } else if (
      distance > threshold ||
      (distance > 0 && velocity > velocityThreshold)
    ) {
      setOverallPageAnimated(Math.max(1, overallPage - 1));
      navigated = true;
    }
    setOvIsDragging(false);
    setOvDragOffset(0);
    ovDragStartX.current = null;
    ovDragCurrentX.current = null;
    ovDragStartTime.current = null;
    // If not navigated, snap back with animation (already handled by transition class)
  };

  // Co-curricular page change with animation
  const setCoCurricularPageAnimated = (page: number) => {
    if (page === coCurricularPage) return;
    setCoTransitionDirection(page > coCurricularPage ? "left" : "right");
    setCoIsTransitioning(true);
    setTimeout(() => {
      setCoCurricularPage(page);
      setCoIsTransitioning(false);
    }, 300);
  };
  // Extra-curricular page change with animation
  const setExtraCurricularPageAnimated = (page: number) => {
    if (page === extraCurricularPage) return;
    setExTransitionDirection(page > extraCurricularPage ? "left" : "right");
    setExIsTransitioning(true);
    setTimeout(() => {
      setExtraCurricularPage(page);
      setExIsTransitioning(false);
    }, 300);
  };
  // Overall page change with animation
  const setOverallPageAnimated = (page: number) => {
    if (page === overallPage) return;
    setOvTransitionDirection(page > overallPage ? "left" : "right");
    setOvIsTransitioning(true);
    setTimeout(() => {
      setOverallPage(page);
      setOvIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />

      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 via-slate-800 to-gray-800 text-white py-8 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-16 md:w-20 h-16 md:h-20 bg-mint-400/20 rounded-full animate-pulse shadow-lg shadow-mint-400/30"></div>
          <div className="absolute bottom-10 right-10 w-12 md:w-16 h-12 md:h-16 bg-sage-400/20 rounded-full animate-bounce shadow-lg shadow-sage-400/30"></div>
          <div className="absolute top-1/2 left-1/3 w-8 md:w-12 h-8 md:h-12 bg-sky-400/20 rounded-full animate-pulse delay-700 shadow-lg shadow-sky-400/30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <Users className="h-12 md:h-16 w-12 md:w-16 mx-auto mb-4 md:mb-6 text-mint-400 drop-shadow-lg" />
            <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-white">
              Activities & Involvement
            </h1>
            <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Beyond the classroom - my participation in co-curricular and
              extra-curricular activities that have enriched my university
              experience
            </p>
          </div>
        </div>
      </div>

      {/* Co-Curricular Activities */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <Trophy className="h-8 md:h-12 w-8 md:w-12 mx-auto text-sage-400 mb-3 md:mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
            Co-Curricular Activities
          </h2>
          <p className="text-base md:text-lg text-gray-300">
            Academic-related activities that complement my formal education
          </p>
        </div>

        {isMobile && (
          <div className="text-center mb-4">
            <div className="inline-flex items-center bg-gray-800/60 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-600/30">
              <span className="text-xs text-gray-400">
                ← Swipe to navigate →
              </span>
            </div>
          </div>
        )}

        {/* Co-Curricular Activities Carousel */}
        <div className="relative">
          <div
            className={`relative overflow-hidden rounded-3xl select-none`}
            onMouseDown={handleCoDragStart}
            onMouseMove={coIsDragging ? handleCoDragMove : undefined}
            onMouseUp={handleCoDragEnd}
            onMouseLeave={coIsDragging ? handleCoDragEnd : undefined}
            onTouchStart={handleCoDragStart}
            onTouchMove={handleCoDragMove}
            onTouchEnd={handleCoDragEnd}
            style={{ cursor: coIsDragging ? "grabbing" : "grab" }}
          >
            {/* Carousel Track */}
            <div
              className={`flex transition-transform ${coIsDragging ? "duration-0" : "duration-300 ease-in-out"}`}
              style={{
                transform: `translateX(calc(-${(coCurricularPage - 1) * 100}% + ${coDragOffset}px))`,
              }}
            >
              {Array.from({
                length: Math.ceil(coCurricularActivities.length / itemsPerPage),
              }).map((_, pageIdx) => (
                <div key={pageIdx} className="w-full flex-shrink-0">
                  <div className="flex-grow grid lg:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
                    {coCurricularActivities
                      .slice(
                        pageIdx * itemsPerPage,
                        (pageIdx + 1) * itemsPerPage,
                      )
                      .map((activity, index) => (
                        <div
                          key={index}
                          className="bg-gray-800/80 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-xl shadow-mint-500/10 overflow-hidden hover:shadow-2xl hover:shadow-mint-500/20 transition-all duration-300 border border-gray-700/50 hover:border-mint-400/30 flex flex-col min-h-[400px] md:min-h-[500px]"
                        >
                          <div className="relative w-full aspect-video">
                            <img
                              src={activity.image}
                              alt={activity.title}
                              className="absolute inset-0 w-full h-full object-cover object-center"
                            />
                          </div>
                          <div className="p-4 md:p-6 flex flex-col flex-grow">
                            <div className="flex items-start justify-between mb-2 md:mb-3">
                              <div className="relative group">
                                <h3 className="text-lg md:text-xl font-bold text-white pr-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                                  {activity.title}
                                </h3>
                                <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-mint-400/0 via-mint-400/50 to-mint-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute -top-2 left-0 w-full h-1 bg-gradient-to-r from-mint-400/0 via-mint-400/50 to-mint-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute inset-0 bg-mint-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                              </div>
                              <span className="bg-gradient-to-r from-mint-500/20 to-sage-500/20 text-mint-300 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold border border-mint-400/30 shrink-0">
                                {activity.role}
                              </span>
                            </div>
                            <div className="flex items-center mb-2 md:mb-3">
                              <Calendar className="h-3 md:h-4 w-3 md:w-4 text-sage-400 mr-2 shrink-0" />
                              <span className="text-sm md:text-base text-gray-400">
                                {activity.period}
                              </span>
                            </div>
                            <div className="relative group/desc">
                              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4 leading-relaxed line-clamp-4 group-hover/desc:line-clamp-none transition-all duration-300 overflow-hidden">
                                {activity.description}
                              </p>
                              <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-gray-800/80 to-transparent opacity-100 group-hover/desc:opacity-0 transition-opacity duration-300 pointer-events-none"></div>
                              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-mint-400/0 via-mint-400/30 to-mint-400/0 opacity-0 group-hover/desc:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <p className="text-xs md:text-sm text-gray-400 italic border-l-2 border-mint-400/30 pl-2 md:pl-3 mt-auto">
                              {activity.caption}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Custom Pagination for Co-Curricular */}
          {Math.ceil(coCurricularActivities.length / itemsPerPage) > 1 && (
            <div className="flex items-center justify-center gap-4 mt-auto">
              {/* Previous Button */}
              <button
                onClick={() =>
                  setCoCurricularPageAnimated(Math.max(1, coCurricularPage - 1))
                }
                disabled={coCurricularPage === 1}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  coCurricularPage === 1
                    ? "bg-gray-800/50 text-gray-500 cursor-not-allowed"
                    : "bg-gray-800/80 text-mint-300 hover:bg-mint-500/20 hover:text-mint-200 border border-mint-400/30 hover:border-mint-400/50"
                }`}
              >
                <span className="text-sm font-medium">Previous</span>
              </button>

              {/* Dot Indicators (show only prev, current, next) */}
              <div className="flex items-center gap-2">
                {(() => {
                  const total = Math.ceil(
                    coCurricularActivities.length / itemsPerPage,
                  );
                  const dots = [];
                  if (coCurricularPage > 1) {
                    dots.push(
                      <button
                        key={coCurricularPage - 1}
                        onClick={() =>
                          setCoCurricularPageAnimated(coCurricularPage - 1)
                        }
                        className="w-3 h-3 bg-gray-600 hover:bg-mint-400/50 rounded-full hover:scale-110 transition-all duration-300"
                        aria-label={`Go to page ${coCurricularPage - 1}`}
                      />,
                    );
                  }
                  dots.push(
                    <button
                      key={coCurricularPage}
                      className="w-8 h-3 bg-gradient-to-r from-mint-400 to-sage-400 rounded-full shadow-lg shadow-mint-400/30 transition-all duration-300"
                      aria-label={`Current page, page ${coCurricularPage}`}
                      disabled
                    />,
                  );
                  if (coCurricularPage < total) {
                    dots.push(
                      <button
                        key={coCurricularPage + 1}
                        onClick={() =>
                          setCoCurricularPageAnimated(coCurricularPage + 1)
                        }
                        className="w-3 h-3 bg-gray-600 hover:bg-mint-400/50 rounded-full hover:scale-110 transition-all duration-300"
                        aria-label={`Go to page ${coCurricularPage + 1}`}
                      />,
                    );
                  }
                  return dots;
                })()}
              </div>

              {/* Next Button */}
              <button
                onClick={() =>
                  setCoCurricularPageAnimated(
                    Math.min(
                      Math.ceil(coCurricularActivities.length / itemsPerPage),
                      coCurricularPage + 1,
                    ),
                  )
                }
                disabled={
                  coCurricularPage ===
                  Math.ceil(coCurricularActivities.length / itemsPerPage)
                }
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  coCurricularPage ===
                  Math.ceil(coCurricularActivities.length / itemsPerPage)
                    ? "bg-gray-800/50 text-gray-500 cursor-not-allowed"
                    : "bg-gray-800/80 text-mint-300 hover:bg-mint-500/20 hover:text-mint-200 border border-mint-400/30 hover:border-mint-400/50"
                }`}
              >
                <span className="text-sm font-medium">Next</span>
              </button>
            </div>
          )}

          {/* Page Counter */}
          <div className="text-center mt-4">
            <span className="text-sm text-gray-400">
              Page {coCurricularPage} of{" "}
              {Math.ceil(coCurricularActivities.length / itemsPerPage)} •{" "}
              {coCurricularActivities.length} activities
            </span>
          </div>
        </div>
      </div>

      {/* Extra-Curricular Activities */}
      <div className="bg-gray-800/50 backdrop-blur-sm py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <Heart className="h-8 md:h-12 w-8 md:w-12 mx-auto text-rose-400 mb-3 md:mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
              Extra-Curricular Activities
            </h2>
            <p className="text-base md:text-lg text-gray-300">
              Community service and voluntary activities that reflect my values
              and commitment to social responsibility
            </p>
          </div>

          {isMobile && (
            <div className="text-center mb-4">
              <div className="inline-flex items-center bg-gray-800/60 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-600/30">
                <span className="text-xs text-gray-400">
                  ← Swipe to navigate →
                </span>
              </div>
            </div>
          )}

          {/* Extra-Curricular Activities Carousel */}
          <div className="relative">
            <div
              className={`relative overflow-hidden rounded-3xl select-none`}
              onMouseDown={handleExDragStart}
              onMouseMove={exIsDragging ? handleExDragMove : undefined}
              onMouseUp={handleExDragEnd}
              onMouseLeave={exIsDragging ? handleExDragEnd : undefined}
              onTouchStart={handleExDragStart}
              onTouchMove={handleExDragMove}
              onTouchEnd={handleExDragEnd}
              style={{ cursor: exIsDragging ? "grabbing" : "grab" }}
            >
              {/* Carousel Track */}
              <div
                className={`flex transition-transform ${exIsDragging ? "duration-0" : "duration-300 ease-in-out"}`}
                style={{
                  transform: `translateX(calc(-${(extraCurricularPage - 1) * 100}% + ${exDragOffset}px))`,
                }}
              >
                {Array.from({
                  length: Math.ceil(
                    extraCurricularActivities.length / itemsPerPage,
                  ),
                }).map((_, pageIdx) => (
                  <div key={pageIdx} className="w-full flex-shrink-0">
                    <div className="flex-grow space-y-6 md:space-y-8 mb-6 md:mb-8">
                      {extraCurricularActivities
                        .slice(
                          pageIdx * itemsPerPage,
                          (pageIdx + 1) * itemsPerPage,
                        )
                        .map((activity, index) => (
                          <div
                            key={index}
                            className={`flex flex-col lg:flex-row items-center gap-4 md:gap-8 ${(pageIdx * itemsPerPage + index) % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                          >
                            <div className="lg:w-1/2">
                              <div className="relative w-[330px] h-[220px] md:w-[650px] md:h-[400px] lg:w-full lg:h-[350px] lg:aspect-video bg-gradient-to-r from-lilac-500/30 to-pink-500/30 rounded-2xl">
                                <img
                                  src={activity.image}
                                  alt={activity.title}
                                  className="absolute inset-0 w-full h-full object-contain object-center rounded-xl md:rounded-2xl shadow-lg shadow-rose-500/10 border border-gray-700/50"
                                />
                              </div>
                              <p className="text-xs md:text-sm text-gray-400 mt-2 italic text-center">
                                {activity.caption}
                              </p>
                            </div>
                            <div className="lg:w-1/2">
                              <div className="flex items-start justify-between mb-2 md:mb-3">
                                <div className="relative group">
                                  <h3 className="text-xl md:text-2xl font-bold text-white pr-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                                    {activity.title}
                                  </h3>
                                  <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-rose-400/0 via-rose-400/50 to-rose-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                  <div className="absolute -top-2 left-0 w-full h-1 bg-gradient-to-r from-rose-400/0 via-rose-400/50 to-rose-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                  <div className="absolute inset-0 bg-rose-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                                </div>
                                <span className="bg-gradient-to-r from-rose-500/20 to-pink-500/20 text-rose-300 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold border border-rose-400/30 shrink-0">
                                  {activity.role}
                                </span>
                              </div>
                              <div className="flex items-center mb-3 md:mb-4">
                                <Calendar className="h-3 md:h-4 w-3 md:w-4 text-rose-400 mr-2 shrink-0" />
                                <span className="text-sm md:text-base text-gray-400">
                                  {activity.period}
                                </span>
                              </div>
                              <div className="relative group/desc">
                                <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4 leading-relaxed line-clamp-4 group-hover/desc:line-clamp-none transition-all duration-300 overflow-hidden">
                                  {activity.description}
                                </p>
                                <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-gray-800/80 to-transparent opacity-100 group-hover/desc:opacity-0 transition-opacity duration-300 pointer-events-none"></div>
                                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-rose-400/0 via-rose-400/30 to-rose-400/0 opacity-0 group-hover/desc:opacity-100 transition-opacity duration-300"></div>
                              </div>
                              <div className="bg-gradient-to-r from-rose-500/20 to-pink-500/20 p-3 md:p-4 rounded-lg border border-rose-400/30 backdrop-blur-sm">
                                <h4 className="font-semibold text-rose-300 mb-1 md:mb-2 text-sm md:text-base">
                                  Impact Made:
                                </h4>
                                <p className="text-sm md:text-base text-gray-300">
                                  {activity.impact}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Pagination for Extra-Curricular */}
            {Math.ceil(extraCurricularActivities.length / itemsPerPage) > 1 && (
              <div className="flex items-center justify-center gap-4 mt-auto">
                {/* Previous Button */}
                <button
                  onClick={() =>
                    setExtraCurricularPageAnimated(
                      Math.max(1, extraCurricularPage - 1),
                    )
                  }
                  disabled={extraCurricularPage === 1}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    extraCurricularPage === 1
                      ? "bg-gray-800/50 text-gray-500 cursor-not-allowed"
                      : "bg-gray-800/80 text-rose-300 hover:bg-rose-500/20 hover:text-rose-200 border border-rose-400/30 hover:border-rose-400/50"
                  }`}
                >
                  <span className="text-sm font-medium">Previous</span>
                </button>

                {/* Dot Indicators (show only prev, current, next) */}
                <div className="flex items-center gap-2">
                  {(() => {
                    const total = Math.ceil(
                      extraCurricularActivities.length / itemsPerPage,
                    );
                    const dots = [];
                    if (extraCurricularPage > 1) {
                      dots.push(
                        <button
                          key={extraCurricularPage - 1}
                          onClick={() =>
                            setExtraCurricularPageAnimated(
                              extraCurricularPage - 1,
                            )
                          }
                          className="w-3 h-3 bg-gray-600 hover:bg-rose-400/50 rounded-full hover:scale-110 transition-all duration-300"
                          aria-label={`Go to page ${extraCurricularPage - 1}`}
                        />,
                      );
                    }
                    dots.push(
                      <button
                        key={extraCurricularPage}
                        className="w-8 h-3 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full shadow-lg shadow-rose-400/30 transition-all duration-300"
                        aria-label={`Current page, page ${extraCurricularPage}`}
                        disabled
                      />,
                    );
                    if (extraCurricularPage < total) {
                      dots.push(
                        <button
                          key={extraCurricularPage + 1}
                          onClick={() =>
                            setExtraCurricularPageAnimated(
                              extraCurricularPage + 1,
                            )
                          }
                          className="w-3 h-3 bg-gray-600 hover:bg-rose-400/50 rounded-full hover:scale-110 transition-all duration-300"
                          aria-label={`Go to page ${extraCurricularPage + 1}`}
                        />,
                      );
                    }
                    return dots;
                  })()}
                </div>

                {/* Next Button */}
                <button
                  onClick={() =>
                    setExtraCurricularPageAnimated(
                      Math.min(
                        Math.ceil(
                          extraCurricularActivities.length / itemsPerPage,
                        ),
                        extraCurricularPage + 1,
                      ),
                    )
                  }
                  disabled={
                    extraCurricularPage ===
                    Math.ceil(extraCurricularActivities.length / itemsPerPage)
                  }
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    extraCurricularPage ===
                    Math.ceil(extraCurricularActivities.length / itemsPerPage)
                      ? "bg-gray-800/50 text-gray-500 cursor-not-allowed"
                      : "bg-gray-800/80 text-rose-300 hover:bg-rose-500/20 hover:text-rose-200 border border-rose-400/30 hover:border-rose-400/50"
                  }`}
                >
                  <span className="text-sm font-medium">Next</span>
                </button>
              </div>
            )}

            {/* Page Counter */}
            <div className="text-center mt-4">
              <span className="text-sm text-gray-400">
                Page {extraCurricularPage} of{" "}
                {Math.ceil(extraCurricularActivities.length / itemsPerPage)} •{" "}
                {extraCurricularActivities.length} activities
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Overall Activities/Events */}
      <div className="bg-gray-900 py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center justify-center w-10 md:w-12 h-10 md:h-12 rounded-full bg-gradient-to-r from-sky-500/20 to-lavender-500/20 mb-3 md:mb-4">
              <TrendingUp className="h-5 md:h-6 w-5 md:w-6 text-sky-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
              Overall Activities & Events
            </h2>
            <p className="text-base md:text-lg text-gray-300">
              University-wide events and activities that have contributed to my
              holistic development
            </p>
          </div>

          {isMobile && (
            <div className="text-center mb-4">
              <div className="inline-flex items-center bg-gray-800/60 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-600/30">
                <span className="text-xs text-gray-400">
                  ← Swipe to navigate →
                </span>
              </div>
            </div>
          )}

          {/* Overall Activities/Events Carousel */}
          <div className="relative">
            <div
              className={`relative overflow-hidden rounded-3xl select-none`}
              onMouseDown={handleOvDragStart}
              onMouseMove={ovIsDragging ? handleOvDragMove : undefined}
              onMouseUp={handleOvDragEnd}
              onMouseLeave={ovIsDragging ? handleOvDragEnd : undefined}
              onTouchStart={handleOvDragStart}
              onTouchMove={handleOvDragMove}
              onTouchEnd={handleOvDragEnd}
              style={{ cursor: ovIsDragging ? "grabbing" : "grab" }}
            >
              {/* Carousel Track */}
              <div
                className={`flex transition-transform ${ovIsDragging ? "duration-0" : "duration-300 ease-in-out"}`}
                style={{
                  transform: `translateX(calc(-${(overallPage - 1) * 100}% + ${ovDragOffset}px))`,
                }}
              >
                {Array.from({
                  length: Math.ceil(
                    overallActivitiesEvent.length / itemsPerPage,
                  ),
                }).map((_, pageIdx) => (
                  <div key={pageIdx} className="w-full flex-shrink-0">
                    <div className="flex-grow grid lg:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
                      {overallActivitiesEvent
                        .slice(
                          pageIdx * itemsPerPage,
                          (pageIdx + 1) * itemsPerPage,
                        )
                        .map((activity, index) => (
                          <div
                            key={index}
                            className="bg-gray-800/80 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-xl shadow-sky-500/10 overflow-hidden hover:shadow-2xl hover:shadow-sky-500/20 transition-all duration-300 border border-gray-700/50 hover:border-sky-400/30 flex flex-col min-h-[400px] md:min-h-[500px]"
                          >
                            <div className="relative w-full aspect-video">
                              <img
                                src={activity.image}
                                alt={activity.title}
                                className="absolute inset-0 w-full h-full object-cover object-center"
                              />
                            </div>
                            <div className="p-4 md:p-6 flex flex-col flex-grow">
                              <div className="flex items-start justify-between mb-2 md:mb-3">
                                <div className="relative group">
                                  <h3 className="text-lg md:text-xl font-bold text-white pr-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                                    {activity.title}
                                  </h3>
                                  <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-sky-400/0 via-sky-400/50 to-sky-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                  <div className="absolute -top-2 left-0 w-full h-1 bg-gradient-to-r from-sky-400/0 via-sky-400/50 to-sky-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                  <div className="absolute inset-0 bg-sky-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                                </div>
                                <span className="bg-gradient-to-r from-sky-500/20 to-lavender-500/20 text-sky-300 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold border border-sky-400/30 shrink-0">
                                  {activity.role}
                                </span>
                              </div>
                              <div className="flex items-center mb-2 md:mb-3">
                                <Calendar className="h-3 md:h-4 w-3 md:w-4 text-sky-400 mr-2 shrink-0" />
                                <span className="text-sm md:text-base text-gray-400">
                                  {activity.period}
                                </span>
                              </div>
                              <div className="relative group/desc">
                                <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4 leading-relaxed line-clamp-4 group-hover/desc:line-clamp-none transition-all duration-300 overflow-hidden">
                                  {activity.description}
                                </p>
                                <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-gray-800/80 to-transparent opacity-100 group-hover/desc:opacity-0 transition-opacity duration-300 pointer-events-none"></div>
                                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-sky-400/0 via-sky-400/30 to-sky-400/0 opacity-0 group-hover/desc:opacity-100 transition-opacity duration-300"></div>
                              </div>
                              <p className="text-xs md:text-sm text-gray-400 italic border-l-2 border-sky-400/30 pl-2 md:pl-3 mt-auto">
                                {activity.caption}
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Pagination for Overall Activities */}
            {Math.ceil(overallActivitiesEvent.length / itemsPerPage) > 1 && (
              <div className="flex items-center justify-center gap-4 mt-auto">
                {/* Previous Button */}
                <button
                  onClick={() =>
                    setOverallPageAnimated(Math.max(1, overallPage - 1))
                  }
                  disabled={overallPage === 1}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    overallPage === 1
                      ? "bg-gray-800/50 text-gray-500 cursor-not-allowed"
                      : "bg-gray-800/80 text-sky-300 hover:bg-sky-500/20 hover:text-sky-200 border border-sky-400/30 hover:border-sky-400/50"
                  }`}
                >
                  <span className="text-sm font-medium">Previous</span>
                </button>

                {/* Dot Indicators (show only prev, current, next) */}
                <div className="flex items-center gap-2">
                  {(() => {
                    const total = Math.ceil(
                      overallActivitiesEvent.length / itemsPerPage,
                    );
                    const dots = [];
                    if (overallPage > 1) {
                      dots.push(
                        <button
                          key={overallPage - 1}
                          onClick={() =>
                            setOverallPageAnimated(overallPage - 1)
                          }
                          className="w-3 h-3 bg-gray-600 hover:bg-sky-400/50 rounded-full hover:scale-110 transition-all duration-300"
                          aria-label={`Go to page ${overallPage - 1}`}
                        />,
                      );
                    }
                    dots.push(
                      <button
                        key={overallPage}
                        className="w-8 h-3 bg-gradient-to-r from-sky-400 to-lavender-400 rounded-full shadow-lg shadow-sky-400/30 transition-all duration-300"
                        aria-label={`Current page, page ${overallPage}`}
                        disabled
                      />,
                    );
                    if (overallPage < total) {
                      dots.push(
                        <button
                          key={overallPage + 1}
                          onClick={() =>
                            setOverallPageAnimated(overallPage + 1)
                          }
                          className="w-3 h-3 bg-gray-600 hover:bg-sky-400/50 rounded-full hover:scale-110 transition-all duration-300"
                          aria-label={`Go to page ${overallPage + 1}`}
                        />,
                      );
                    }
                    return dots;
                  })()}
                </div>

                {/* Next Button */}
                <button
                  onClick={() =>
                    setOverallPageAnimated(
                      Math.min(
                        Math.ceil(overallActivitiesEvent.length / itemsPerPage),
                        overallPage + 1,
                      ),
                    )
                  }
                  disabled={
                    overallPage ===
                    Math.ceil(overallActivitiesEvent.length / itemsPerPage)
                  }
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    overallPage ===
                    Math.ceil(overallActivitiesEvent.length / itemsPerPage)
                      ? "bg-gray-800/50 text-gray-500 cursor-not-allowed"
                      : "bg-gray-800/80 text-sky-300 hover:bg-sky-500/20 hover:text-sky-200 border border-sky-400/30 hover:border-sky-400/50"
                  }`}
                >
                  <span className="text-sm font-medium">Next</span>
                </button>
              </div>
            )}

            {/* Page Counter */}
            <div className="text-center mt-4">
              <span className="text-sm text-gray-400">
                Page {overallPage} of{" "}
                {Math.ceil(overallActivitiesEvent.length / itemsPerPage)} •{" "}
                {overallActivitiesEvent.length} activities
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Developed */}
      <div className="bg-gray-800/50 backdrop-blur-sm py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
              Skills Developed Through Activities
            </h2>
            <p className="text-base md:text-lg text-gray-300">
              Key competencies gained through active participation
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                skill: "Leadership",
                description: "Leading teams and organizing events",
                color: "rose",
              },
              {
                skill: "Communication",
                description: "Public speaking and interpersonal skills",
                color: "lavender",
              },
              {
                skill: "Project Management",
                description: "Planning and executing initiatives",
                color: "mint",
              },
              {
                skill: "Cultural Sensitivity",
                description: "Working with diverse communities",
                color: "sky",
              },
              {
                skill: "Problem Solving",
                description: "Addressing challenges creatively",
                color: "peach",
              },
              {
                skill: "Teamwork",
                description: "Collaborating effectively with others",
                color: "sage",
              },
              {
                skill: "Time Management",
                description: "Balancing multiple commitments",
                color: "coral",
              },
              {
                skill: "Social Responsibility",
                description: "Understanding community needs",
                color: "lilac",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-gray-800/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:shadow-${item.color}-500/20 transition-all duration-300 text-center border border-gray-700/50 hover:border-${item.color}-400/30 hover:scale-105`}
              >
                <h3
                  className={`font-bold text-white mb-2 text-base md:text-lg`}
                >
                  {item.skill}
                </h3>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
                <div
                  className={`h-1 w-0 group-hover:w-full bg-gradient-to-r from-${item.color}-400 to-${item.color}-300 transition-all duration-500 mt-3 md:mt-4 mx-auto rounded-full`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Activities;
