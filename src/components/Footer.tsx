import { Link } from "react-router-dom"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Heart, ExternalLink, Star, Users, Facebook, BookOpen } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "Academic", path: "/academic" },
    { name: "Activities", path: "/activities" },
    { name: "University Life", path: "/university-life" },
    { name: "Grades", path: "/grades" },
    { name: "My Story", path: "/story" },
  ]

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/wriality", color: "hover:text-blue-500" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/maria-frances-albano-93700826b/", color: "hover:text-blue-600" },
    { name: "Twitter", icon: Twitter, href: "https://x.com/mariyaparanses?t=t2lAO111knPFCclaVKzWKQ&s=09", color: "hover:text-blue-400" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/mariyaparanses", color: "hover:text-pink-600" },
  ]

  const quickLinks = [
    { name: "About Me", href: "/story" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "#resume" },
    { name: "Projects", href: "/activities" },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 border-t border-gray-800/60 backdrop-blur-md shadow-2xl shadow-rose-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-lavender-400 bg-clip-text text-transparent drop-shadow-lg">
                  Portfolio
                </h3>
                <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                  Showcasing my academic journey, activities, and personal growth at PUP.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-400 hover:text-rose-400 transition-colors">
                  <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                  <span>07mariafrancesalbano@gmail.com</span>
                </div>
                <div className="flex items-center text-sm text-gray-400 hover:text-rose-400 transition-colors">
                  <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                  <span>+63 968 494 8118</span>
                </div>
                <div className="flex items-center text-sm text-gray-400 hover:text-rose-400 transition-colors">
                  <MapPin className="w-4 h-4 mr-3 flex-shrink-0" />
                  <span>Sta. Mesa, Manila, Philippines</span>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-6">Navigation</h4>
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-300 hover:text-rose-400 transition-colors duration-200 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Values Section */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-6">Core Values</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white text-sm">Excellence</span>
                    <p className="text-xs text-gray-300">Striving for the highest standards in all academic and personal pursuits.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-mint-400 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white text-sm">Collaboration</span>
                    <p className="text-xs text-gray-300">Working together to achieve shared goals and foster community.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-rose-400 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white text-sm">Empathy</span>
                    <p className="text-xs text-gray-300">Valuing compassion and understanding in every interaction.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-sky-400 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white text-sm">Lifelong Learning</span>
                    <p className="text-xs text-gray-300">Embracing growth and continuous education as a way of life.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Social Links & Portfolio Highlights */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-6">Portfolio Highlights</h4>

              {/* Social Media Links */}
              <div className="flex space-x-4 mb-6">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`p-2 rounded-lg bg-gray-800/80 shadow-md border border-gray-700 text-gray-300 ${social.color} transition-all duration-200 hover:shadow-lg hover:scale-110`}
                      aria-label={social.name}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>

              {/* Portfolio Highlights Section */}
              <div className="bg-gray-800/70 rounded-lg p-4 shadow-md border border-gray-700/60 backdrop-blur-sm flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <Star className="w-6 h-6 text-rose-400 flex-shrink-0" />
                  <div>
                    <h5 className="text-sm font-semibold text-white mb-1">Academic Excellence</h5>
                    <p className="text-xs text-gray-300">Consistent President's Lister and awardee in academic competitions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-mint-400 flex-shrink-0" />
                  <div>
                    <h5 className="text-sm font-semibold text-white mb-1">Leadership & Service</h5>
                    <p className="text-xs text-gray-300">Active leader and organizer in student organizations and community events.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="w-6 h-6 text-rose-400 flex-shrink-0" />
                  <div>
                    <h5 className="text-sm font-semibold text-white mb-1">Passion for Growth</h5>
                    <p className="text-xs text-gray-300">Driven by a love for learning, teaching, and making a positive impact.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-gradient-to-r from-transparent via-rose-700 to-transparent opacity-40" />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center text-sm text-gray-400">
              <span>© {currentYear} Portfolio. Made with</span>
              <Heart className="w-4 h-4 mx-1 text-rose-400 fill-current" />
              <span>by ren</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
