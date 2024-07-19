import Timeline from "../components/Timeline";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
const Schedule = () => {
    return (
      <div className="container-fluid w-full h-auto md:mx-auto bg-gray schedule-container p-10 font-medium ">
        <h1 className="flex justify-center mb-4 text-4xl Heading">Schedule</h1>
        <p className="text-xl md:m-10 sm:m-10 items-centered text-3rd pb-8">
        Kindly arrive at 13:00 pm for your convenience, a chance to know fellow guests,
        take pictures and to be seated as the wedding talk will start at 14:00 pm and the 
        whole event will end at18:00 pm. Programme will be shared electronically before or on the day.
        </p>
        <p className="text-3rd  text-xl md:m-10 sm:m-10 items-centered pb-5">
        There’s an open bar at the venue for your preferred alcoholic beverages.
        It’s a no cash facility, only card swipes.
        The whole programme will be at Rosemary Hill, The Greenhouse Café. Click link to get directions.</p>
        <button className="btn btn-primary sched-btn bg-black text-white rounded-md p-4  d-flex  justify-center text-bold md:ml-40  hover:bg-white hover:text-black hover:text-bold translate-x-2">
        <a href="https://www.rosemaryhill.co.za/accommodation/" target="_blank">
        Get Directions
        </a>
        </button>
        <Timeline />
        <div className="more-info ml-10 md:m-10 sm:m-10 text-3rd">
        <p className="text-xl pt-6">
        For more information, kindly contact Wedding Coordinator
        </p>

        <div className=" flex justify-start contact-info text-white text-xl pt-3">
        <PersonOutlinedIcon  className=""/>
        <p className=" text-xl  pr-4  pl-2">
          Bell Mpebe :  
          072 581 2840
         </p>
        </div>
        </div>
      </div>
    )
}
export default Schedule;