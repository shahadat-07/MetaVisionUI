import React from "react";
import LoadMore from "./LoadMore/LoadMore";
import SinglePostCard from "./SinglePostCard/SinglePostCard";

const PostCard = () => {
  const postDetails = [
    {
      id: 1,
      username: "@Guest Oliver Watkins",
      postImg: "https://i.ibb.co/t2jvZt5/avatar-lg-4.jpg",
      hours: "5",
      comments: [
        "I am so happy to be here ! It's great opportunity to our generation !!!",
        "Thanks to Metavision i have got many interesting things about different metaverses! It's changed my life! Thank you guys",
        "Just Looking Awesome",
      ],
    },
    {
      id: 2,
      postImg: "https://i.ibb.co/sRRJ1tK/avatar-lg-2.jpg",
      username: "@Guest Oliver Watkins",
      hours: "4",
      comments: [
        "Hey guys, i am from Decentralend ! Let's become friends, i can show you amazing places.",
        "hey guys check my NFT collection",
      ],
    },
    {
      id: 3,
      postImg: "https://i.ibb.co/fxG23nL/FaceBook.png",
      username: "@Shahadat Hossen",
      hours: "6",
      comments: [
        "I saw you near exhibition yesterday 🙂",
        "Yeah, i was so excited ! Did you like it too ?",
      ],
    },
    {
      id: 4,
      postImg: "https://i.ibb.co/b7cJMX5/avatar-lg-3.jpg",
      username: "@Sumaia Akter",
      hours: "1",
      comments: [
        "check your whitelists mate 🙂",
        "Thank you !!! I have received notification ❤️",
      ],
    },
    {
      id: 5,
      postImg: "https://i.ibb.co/PtjtRyg/avatar-lg-1.jpg",
      username: "@Jannat",
      hours: "9",
      comments: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, minima",
        "Minus sed omnis animi vel eveniet illum magnam ipsum? Iure, dolor hic",
      ],
    },
  ];

  return (
    <section className="space-y-7 drop-shadow-lg">
      {postDetails.map((post) => (
        <SinglePostCard postDetails={post} />
      ))}
      <LoadMore />
    </section>
  );
};

export default PostCard;
