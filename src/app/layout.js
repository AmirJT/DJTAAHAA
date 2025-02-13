import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import BlogTimeline from "@/components/BlogTimeline";
import UpcomingEventsPreview from "@/components/UpcomingEventsPreview";
import GalleryCarousel from "@/components/GalleryCarousel";
import MusicGallery from "@/components/MusicGallery";
import Booking from '@/components/Booking';
import LoadingWrapper from '@/components/LoadingScreen';
import ClientLayout from '@/components/ClientLayout'; // ✅ Import new component
import './globals.css';

export const metadata = {
  title: "DJ Taha | Official Website",
  description: "Official website of DJ Taha - Explore upcoming events, music, gallery, and booking.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <LoadingWrapper>
          <Navbar />
          
          {/* ✅ Only Show These Sections on the Homepage */}
          <ClientLayout>
            <Header />
            <BlogTimeline />
            <UpcomingEventsPreview />
            <GalleryCarousel />
            <MusicGallery />
            <Booking />
          </ClientLayout>

          {/* ✅ Render Other Pages */}
          <main>{children}</main>

          <Footer />
        </LoadingWrapper>
      </body>
    </html>
  );
}