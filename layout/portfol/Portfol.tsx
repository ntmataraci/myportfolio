const Portfol= () => {

const data = [
    {
        img:"./ppsmart.png",
        header:"Popup Smart Practicum",
        technology:"Next JS/SCSS/Typescript"
    },    {
        img:"./shoestore.png",
        header:"Shoe Store Clone",
        technology:"Next JS"
    },    {
        img:"./moviedb.png",
        header:"Movie DB",
        technology:"Reactjs"
    }
]

    return(
        <div className="w-full flex justify-items-center flex-col gap-5 mt-5" id="portfolio">
        <div className="flex justify-center"><div className="w-[50px]  bg-slate-400 h-1 mr-5 my-auto"></div> <div className="text-center text-sm">MY WORKS</div></div> 
          <div className="text-center text-white text-xl">Examples</div>
          <div className="flex gap-10 m-auto flex-wrap justify-center">
            {data.map((item,idx) => (
              <div key={idx} className="rounded-xl cursor-pointer  group w-[350px] flex flex-col gap-5 justify-center relative hover:bg-slate-400 hover:opacity-50">
                <div className="flex justify-center">
                <img className="rounded-xl object-cover h-[300px] " src={item.img}/>
                </div>
                <div className="bg-white h-[50px] hidden group-hover:block absolute bottom-0 w-full">
                <div className="text-center text-xl font-bold text-slate-600 hidden group-hover:block absolute bottom-0">{item.header}</div>
                <div className="text-center text-slate-500 hidden group-hover:block absolute bottom-5">{item.technology}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
    )
}

export default Portfol