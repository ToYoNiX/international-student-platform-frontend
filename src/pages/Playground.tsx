import { useEffect, useState } from 'react';
import AcademicStaffProfileCard, { AcademicStaffProfileCardProps } from '../components/AcademicStaffProfileCard';
import EventsNewsSection from '../components/EventsNewsCarousels';

// --- Friend's New Imports ---
import NewStudyPlanResources from '../components/NewStudyPlanResources';
import { postgradStudyPlanConfig, undergradStudyPlanConfig } from '../components/newStudyPlanResourcesMockData';
import ResourcesComponent from '../components/ResourcesComponent';
import { mockGenericReources } from '../components/genericResourcesMockData';

export default function Playground() {
  const [staffList, setStaffList] = useState<AcademicStaffProfileCardProps[]>([]);
  const [eventsList, setEventsList] = useState<any[]>([]);
  const [newsList, setNewsList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const baseUrl = import.meta.env.VITE_CMS_URL || import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';
        
        // Fetch Staff, Events, and News simultaneously from Strapi
        const [staffRes, eventsRes, newsRes] = await Promise.all([
          fetch(`${baseUrl}/api/academic-staffs?populate=*`),
          fetch(`${baseUrl}/api/events?populate=*`),
          fetch(`${baseUrl}/api/news-items?populate=*`)
        ]);

        const [staffJson, eventsJson, newsJson] = await Promise.all([
          staffRes.json(),
          eventsRes.json(),
          newsRes.json()
        ]);

        // 1. Format Staff
        if (staffJson.data) {
          const formattedStaff = staffJson.data.map((item: any) => {
            const attrs = item.attributes || item;
            const mediaImage = attrs.imageUrl || attrs.image || attrs.avatar;
            const mediaCv = attrs.cvUrl || attrs.cvurl || attrs.cvDocument || attrs.cv;
            
            const imagePath = mediaImage?.url || mediaImage?.data?.attributes?.url;
            const cvPath = mediaCv?.url || mediaCv?.data?.attributes?.url;

            return {
              name: attrs.name,
              role: attrs.role,
              specialty: attrs.specialty || '',
              email: attrs.email || '',
              bio: attrs.bio || '',
              cvLabel: attrs.cvLabel || attrs.cvlabel || 'Download CV (PDF)',
              qualifications: attrs.qualifications || [],
              researchDirections: attrs.researchDirections || [],
              experience: attrs.experience || [],
              imageUrl: imagePath ? (imagePath.startsWith('http') ? imagePath : `${baseUrl}${imagePath}`) : '/accademics/image-not-hero.png',
              cvUrl: cvPath ? (cvPath.startsWith('http') ? cvPath : `${baseUrl}${cvPath}`) : '#'
            };
          });
          setStaffList(formattedStaff);
        }

        // 2. Format Events
        if (eventsJson.data) {
          const formattedEvents = eventsJson.data.map((item: any) => {
            const attrs = item.attributes || item;
            const media = attrs.imageUrl || attrs.image;
            const imagePath = media?.url || media?.data?.attributes?.url;
            
            return {
              id: item.id.toString(),
              title: attrs.title,
              description: attrs.description,
              day: attrs.day,
              month: attrs.month,
              timeRange: attrs.timeRange,
              href: attrs.href || '#',
              imageUrl: imagePath ? (imagePath.startsWith('http') ? imagePath : `${baseUrl}${imagePath}`) : '/accademics/events/event-1.jpg'
            };
          });
          setEventsList(formattedEvents);
        }

        // 3. Format News
        if (newsJson.data) {
          const formattedNews = newsJson.data.map((item: any) => {
            const attrs = item.attributes || item;
            const media = attrs.imageUrl || attrs.image;
            const imagePath = media?.url || media?.data?.attributes?.url;
            
            return {
              id: item.id.toString(),
              title: attrs.title,
              description: attrs.description,
              href: attrs.href || '#',
              imageUrl: imagePath ? (imagePath.startsWith('http') ? imagePath : `${baseUrl}${imagePath}`) : '/accademics/news/news-1.jpg'
            };
          });
          setNewsList(formattedNews);
        }

      } catch (error) {
        console.error('Error fetching data from Strapi:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllData();
  }, []);

  return (
    <div className="w-full bg-[#070d19] pb-16">
      
      {/* --- Your Dynamic Strapi Sections --- */}
      <section className="mx-auto w-full max-w-[1400px] px-4 pt-12 sm:px-8 lg:px-10">
        <h1 className="mb-6 text-center text-3xl font-bold text-emerald-400 sm:text-left">UI Playground</h1>
        <p className="mb-8 text-center text-slate-300 sm:text-left">
          Live preview of the Academic Staff, Events, and News collections loaded from the Strapi Backend.
        </p>

        {isLoading ? (
          <div className="flex justify-center p-8 text-emerald-400 text-xl font-medium animate-pulse">
            Loading Data from Strapi...
          </div>
        ) : staffList.length > 0 ? (
          <div className="flex flex-col gap-8">
            {staffList.map((member, index) => (
              <AcademicStaffProfileCard key={index} {...member} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-slate-600 p-12 text-center text-slate-400">
            <p className="text-lg">No staff profiles found.</p>
          </div>
        )}
      </section>

      <div className="mt-12">
        <EventsNewsSection 
          events={eventsList} 
          news={newsList} 
        />
      </div>

      {/* --- Friend's Added Section (Merged) --- */}
      <section className="mt-12 bg-white py-12">
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-8 lg:px-10">
          <h2 className="mb-6 text-center text-3xl font-bold text-slate-900 sm:text-left">
            Temporary preview for testing (Mock Data)
          </h2>
          <div className="space-y-8">
            <NewStudyPlanResources config={undergradStudyPlanConfig} />
            <NewStudyPlanResources config={postgradStudyPlanConfig} />
            <ResourcesComponent config={mockGenericReources} />
          </div>
        </div>
      </section>
      
    </div>
  );
}