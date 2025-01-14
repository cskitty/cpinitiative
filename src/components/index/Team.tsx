import * as React from "react"
import Image from "next/image"
import {
  nathanw,
  maggie,
  melody,
  daniel,
  jeffrey,
  darren,
  michael,
  benq,
  Andrew,
  nathanc,
} from "../index/images"

type Member = {
  photo: StaticImageData // url of photo relative to content/authors/images/, EXCLUDING EXTENSION
  name: string
  title: string
}

export const members: Member[] = [
  {
    photo: nathanw,
    name: "Nathan Wang",
    title: "Board of Directors / 3x Finalist",
  },
  {
    photo: maggie,
    name: "Maggie Liu",
    title: "Executive",
  },
  {
    photo: melody,
    name: "Melody Yu",
    title: "Executive",
  },
  {
    photo: daniel,
    name: "Daniel Guan",
    title: "Director of Classes / Finalist",
  },
  {
    photo: jeffrey,
    name: "Jeffrey Meng",
    title: "Director of Operations",
  },
  {
    photo: darren,
    name: "Darren Yao",
    title: "Director of Outreach",
  },
  {
    photo: michael,
    name: "Michael Cao",
    title: "Director of Clubs",
  },
  {
    photo: benq,
    name: "Benjamin Qi",
    title: "Former Director of USACO Guide / 2x IOI Winner",
  },
  {
    photo: Andrew,
    name: "Andrew Wang",
    title: "Former Secretary",
  },
  {
    photo: nathanc,
    name: "Nathan Chen",
    title: "Former Treasurer / 2x Finalist",
  },
]

export default function Team() {
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-screen-xl sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl">
              Meet our team
            </h2>
            <p className="text-xl leading-7 text-gray-500">
              Comprised of USACO Finalists and top USACO competitors, our team
              is committed to increasing participation in competitive
              programming.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
              {members.map(member => (
                <li key={member.name}>
                  <div className="flex items-center space-x-4 lg:space-x-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden relative lg:w-20 lg:h-20">
                      <Image
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center center"
                        src={member.photo}
                        alt={member.name}
                        placeholder="blur"
                      />
                    </div>
                    <div className="font-medium text-lg leading-6 space-y-1">
                      <h3>{member.name}</h3>
                      <p className="text-indigo-600 text-base">
                        {member.title}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
