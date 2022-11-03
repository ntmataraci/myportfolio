import {RiReactjsFill} from "react-icons/ri"
import {GiMechanicGarage} from "react-icons/gi"
import {BiGame} from "react-icons/bi"
const Services = () => {
  const data = [
    {
      header: "FrontEnd Development",
      content: <ul className="italic tracking-tighter text-left flex flex-col gap-2">
      <li>I can make web app for you with nextjs-typescript.</li>
      <li>With wordpress api connection,you can get best speed for seo. </li>
      <li>Basic CRUD operations can be make with php/nodejs-sql/mongodb </li>
      </ul>,
      icon: <RiReactjsFill className="text-4xl"/>,
    },
    {
      header: "Mechanical Engineering",
      content: "I have been working for 14 years for automotive industry as mech.eng. My main focus are planning and IT. I can help you about MRP and Database solutions. MS-Access/VBA and Excel Macros can be used. ",
      icon: <GiMechanicGarage className="text-4xl"/>,
    },
    {
      header: "Hobbies",
      content: "Everything is not job ! I like sci-fiction and fantasy ficton and playing FRP-RPG games, boardgames, Paradox Strategy Games. I interested with basketball and Bodybuilding. And you know Metal Music is Not Dead.",
      icon: <BiGame className="text-4xl"/>,
    },
  ];

  return (
    <div className="w-full flex justify-items-center flex-col gap-5" id="services">
    <div className="flex justify-center"><div className="w-[50px]  bg-slate-400 h-1 mr-5 my-auto"></div> <div className="text-center text-sm">Services</div></div> 
      <div className="text-center text-white text-xl">Specialized In</div>
      <div className="flex gap-10 m-auto flex-wrap justify-center">
        {data.map((item,idx) => (
          <div key={idx} className="bg-white rounded-xl border-solid border-2 border-indigo-200 w-[300px] h-[300px] flex flex-col gap-5 justify-center">
            <div className="flex justify-center fill-slate-700">
              {item.icon}
            </div>
            <div className="text-center text-xl font-bold text-slate-600">{item.header}</div>
            <div className="text-center text-slate-500">  {item.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Services;
