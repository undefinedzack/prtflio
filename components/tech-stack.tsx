"use client";

import React from "react";

import { FaReact } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { FaGolang, FaJava, FaAws, FaPython } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiNestjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGooglecloud,
  SiDjango,
  SiRedis,
  SiGraphql,
} from "react-icons/si";
import {
  BiLogoSpringBoot,
  BiLogoTypescript,
  BiLogoPostgresql,
} from "react-icons/bi";

export default function TechStack() {
  return (
    <>
      <p className="font-serif text-center text-gray-500 font-bold text-2xl lg:text-2xl">
        Tech Stack
      </p>
      <div className="flex flex-col items-center">
        <div className="flex gap-4 items-center mt-5 text-3xl">
          <FaReact />
          <TbBrandNextjs />
          <SiNestjs />
          <BiLogoSpringBoot />
          <SiExpress />
          <SiDjango />
        </div>
        <div className="flex gap-4 items-center mt-5 text-3xl">
          <BiLogoTypescript />
          <RiJavascriptFill />
          <FaGolang />
          <FaJava />
          <FaPython />
        </div>
        <div className="flex gap-4 items-center mt-5 text-3xl">
          <SiMongodb />
          <BiLogoPostgresql />
          <SiMysql />
          <SiRedis />
        </div>
        <div className="flex gap-4 items-center mt-5 text-3xl">
          <FaAws />
          <SiGooglecloud />
        </div>
        <div className="flex gap-4 items-center mt-5 text-3xl">
          <SiGraphql />
        </div>
      </div>
    </>
  );
}
