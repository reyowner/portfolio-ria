
import { Calendar } from 'lucide-react';

interface TimelineCardProps {
  title: string;
  date: string;
  description: string;
  image?: string;
  imageCaption?: string;
}

const TimelineCard = ({ title, date, description, image, imageCaption }: TimelineCardProps) => {
  return (
    <div className="relative pl-8 pb-8">
      <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
      <div className="absolute left-2 top-4 w-0.5 h-full bg-blue-200"></div>
      
      <div className="bg-white rounded-lg shadow-lg p-6 ml-6 hover:shadow-xl transition-shadow">
        <div className="flex items-center mb-3">
          <Calendar className="h-5 w-5 text-blue-600 mr-2" />
          <span className="text-blue-600 font-semibold">{date}</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        
        {image && (
          <div className="mt-4">
            <img 
              src={`https://images.unsplash.com/${image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
              alt={title}
              className="w-full h-64 object-cover rounded-lg"
            />
            {imageCaption && (
              <p className="text-sm text-gray-600 mt-2 italic">{imageCaption}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineCard;
