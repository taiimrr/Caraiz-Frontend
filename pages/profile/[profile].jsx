import React, { useEffect, useState } from "react";
import Image from "next/image";
import UserId from "../../components/userId";
import Meta from "../../components/Meta";

const Edit_user = () => {
  const [profilePhoto, setProfilePhoto] = useState();
  const [coverePhoto, setCoverePhoto] = useState();
  const [preview, setPreview] = useState();
  const [coverPreview, setCoverPreview] = useState();

  const handleProfilePhoto = (e) => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      setProfilePhoto(file);
    } else {
      setProfilePhoto(null);
    }
  };

  const handleCoverPhoto = (e) => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      setCoverePhoto(file);
    } else {
      setCoverePhoto(null);
    }
  };

  useEffect(() => {
    if (profilePhoto) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(profilePhoto);
    } else {
      setPreview(null);
    }
  }, [profilePhoto]);

  useEffect(() => {
    if (coverePhoto) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverPreview(reader.result);
      };
      reader.readAsDataURL(coverePhoto);
    } else {
      setCoverPreview(null);
    }
  }, [coverePhoto]);

  return (
    <div>
      <Meta title="Profile || Xhibiter | NFT Marketplace Next.js Template" />
      <div className="pt-[5.5rem] lg:pt-24">
        {/* <!-- Banner --> */}
        <div className="relative">
          <Image
            width={1519}
            height={300}
            priority
            src={coverPreview ? coverPreview : "/images/user/banner.jpg"}
            alt="banner"
            className="h-[18.75rem] w-full object-cover"
          />
          <div className="container relative -translate-y-4">
            <div className="font-display group hover:bg-accent absolute right-0 bottom-4 flex items-center rounded-lg bg-white py-2 px-4 text-sm">
              <input
                type="file"
                accept="image/*"
                className="absolute inset-0 cursor-pointer opacity-0"
                onChange={(e) => handleCoverPhoto(e)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="fill-jacarta-400 mr-1 h-4 w-4 group-hover:fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M15.728 9.686l-1.414-1.414L5 17.586V19h1.414l9.314-9.314zm1.414-1.414l1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414zM7.242 21H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 21z"></path>
              </svg>
              <span className="text-black mt-0.5 block group-hover:text-white">
                Edit cover photo
              </span>
            </div>
          </div>
        </div>
        {/* <!-- end banner --> */}
        {/* <!-- Edit Profile --> */}

        {/* <!-- end edit profile --> */}
      </div>
    </div>
  );
};

export default Edit_user;
