import { Link } from "react-router-dom"

export default function Banner() {
  const items = [
    { img: "/images/new reborn logo2.png", text: "Follow @reborn.classics on Instagram" },
    { img: "/images/new reborn logo2.png", text: "Follow @reborn.classics on Instagram" },
    { img: "/images/new reborn logo2.png", text: "Follow @reborn.classics on Instagram" },
    { img: "/images/new reborn logo2.png", text: "Follow @reborn.classics on Instagram" },
  ]

  return (
    <div className="w-full overflow-hidden bg-gray-200 py-3">
      <div className="flex w-max animate-marquee gap-12">

        {[...items, ...items].map((item, i) => (
          <Link to={"https://www.instagram.com/reborn.classics?igsh=MTI1dHJmdHltejdoZw%3D%3D&utm_source=qr"} target="blank" key={i} className="flex items-center gap-3 whitespace-nowrap">

            <img src={item.img} className="w-10 h-10 rounded-md object-cover"/>

            <p className="text-sm font-medium">
              {item.text}
            </p>
          </Link>
        ))}

      </div>
    </div>
  )
}