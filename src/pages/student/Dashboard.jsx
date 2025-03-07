import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCalendarAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import profile from '../../asset/studentpage/female avatar.svg'
import program from '../../asset/studentpage/TinkHerHack.svg'
const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {/* Profile Section */}
      <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
        <div className="flex items-center">
          <img
            src={profile}
            alt="Profile"
            className="w-12 h-12 rounded-full mr-3"
          />
          <div>
            <h2 className="text-lg font-semibold">Fatima</h2>
            <p className="text-sm text-gray-500">24BCSA663</p>
          </div>
        </div>
        <FontAwesomeIcon icon={faBell} className="text-gray-500 text-xl" />
      </div>

      {/* Search Bar */}
      <div className="mt-4">
        <input
          type="text"
          placeholder="Search events..."
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Upcoming Events with Swiper (Slideshow Animation) */}
      <h3 className="mt-6 text-xl font-semibold">Upcoming events</h3>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{
          clickable: true,
          el: '.custom-pagination', // Attach pagination to a custom div
        }}
        modules={[Pagination, Autoplay]}
        className="mt-4"
      >
        <SwiperSlide>
          <EventCard
            title="GigXplore"
            description="Free Freelance workshop."
            date="18-02-25"
            location="Seminar Hall"
          />
        </SwiperSlide>
        <SwiperSlide>
          <EventCard
            title="Tink-Her-Hack"
            description="Overnight Hackathon for girls."
            date="22-02-25"
            location="IEDC Room"
          />
        </SwiperSlide>
        <SwiperSlide>
          <EventCard
            title="Bootcamp"
            description="New Connect Bootcamp."
            date="03-02-25"
            location="IEDC"
          />
        </SwiperSlide>
      </Swiper>

      {/* Pagination Dots - Placed outside */}
      <div className="custom-pagination mt-4 flex justify-center"></div>



      {/* Recent Events */}
      <h3 className="mt-6 text-xl font-semibold">Recent events</h3>
      <div className="space-y-4 mt-4">
        <RecentEventCard
          image={program}
          title="Connect Bootcamp"
          description="Bootcamp arranged for new Connect Interns."
          date="22-01-25"
          location="Seminar Hall"
        />
        <RecentEventCard
          image={program}
          title="Tink-Her-Hack 3.0"
          description="Full day hackathon only for girls."
          date="13-02-25"
          location="IEDC Room"
        />
        <RecentEventCard
          image={program}
          title="SketchUp"
          description="Two day Graphic designing workshop."
          date="22-01-25"
          location="Seminar Hall"
        />
      </div>
    </div>
  );
};

// Event Card Component
const EventCard = ({ title, description, date, location }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md min-w-[220px]">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
      <div className="flex items-center text-sm text-gray-500 mt-2">
        <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
        {date}
      </div>
      <div className="flex items-center text-sm text-gray-500 mt-1">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
        {location}
      </div>
      <button className="mt-3 w-full bg-green-500 text-white p-2 rounded-lg">
        Register
      </button>
    </div>
  );
};

// Recent Event Card Component
const RecentEventCard = ({ image, title, description, date, location }) => {
  return (
    <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
      <img src={image} alt={title} className="w-16 h-16 rounded-lg mr-4" />
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="flex items-center text-sm text-gray-500 mt-2">
          <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
          {date}
        </div>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
          {location}
        </div>
      </div>
    </div>
  );
};

export default App;
