"use client";
import React, { Suspense } from "react";
import { db } from "../api/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

const Projects = () => {
  const [list, setList] = useState([]);

  // const ProjectCard = (
  //   imglink,
  //   heading,
  //   desc,
  //   alt,
  //   livelink,
  //   gitlink,
  //   isHosted = true
  // ) => {
  //   return (
  //     <div>
  //       <img src={imglink} alt={alt} />
  //       <h1 className="text-white">{heading}</h1>
  //       <p>{desc}</p>
  //       <div>
  //         {isHosted ? (
  //           <a href={livelink} key={desc} target="_blank">
  //             <button>View Live</button>
  //           </a>
  //         ) : (
  //           <button>View Live</button>
  //         )}
  //         <a href={gitlink} key={imglink} target="_blank">
  //           <button>Github Repo</button>
  //         </a>
  //       </div>
  //     </div>
  //   );

  const ProjectCards = (imgUrl, title, description, gitUrl, previewUrl) => {
    return (
      <div>
        <div
          className="h-72 md:h-72 rounded-t-xl relative group"
          style={{
            background: `url(${imgUrl})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          {/* <Image src={imgUrl} height={50} width={50}  /> */}
          <div className="overlay  items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
            <Link
              href={gitUrl}
              target="_blank"
              className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-cyan-400" />
            </Link>
            <Link
              href={previewUrl}
              target="_blank"
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-green-300" />
            </Link>
          </div>
        </div>
        <div className="text-white rounded-b-xl mt-3 py-6 px-4 bg-gradient-to-bl from-purple-500 via-black to-cyan-500">
          <h5 className="text-xl text-center justify-center font-semibold mb-2">
            {title}
          </h5>
          <p className="text-[#ADB7BE]">{description}</p>
        </div>
      </div>
    );
  };

  useEffect(() => {
    let isSubscribed = true;
    const readData = async () => {
      const querySnapshot = await getDocs(collection(db, "project_list"));
      querySnapshot?.docs.forEach((doc) => {
        if (isSubscribed) setList((list) => [...list, doc.data()]);
      });
    };
    readData();
    return () => (isSubscribed = false);
  }, []);
  // console.log(list)
  return (
    <div id="project" className="">
      <h1 className="text-center text-4xl font-bold  mt-4 mb-8 md:mb-12 bg-gradient-to-br from-purple-500 to-cyan-500 p-2">
        Featured Projects
      </h1>
      <p className="text-gray-200 text-center text-lg">
        I have made many small and big project in last few years. So, Guys here
        are a few of my projects. You can visit my github for all projects list.
        You can also suggest me some idea about to create project or even we can
        make together. Check and suggest me where can i improve in my project. I
        don't have any experience in team working but i'd love to work together.
      </p>
      {/* <h4>Project</h4> */}

      <Suspense fallback={<h1>loading....</h1>}>
        <div className="">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {list &&
              list.map((e) => (
                <div key={e.title}>
                  {ProjectCards(
                    e.imgUrl,
                    e.title,
                    e.description,
                    e.gitUrl,
                    e.previewUrl
                  )}
                </div>
              ))}
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default Projects;
