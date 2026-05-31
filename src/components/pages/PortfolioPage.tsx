"use client";

import { useState, useEffect, useCallback } from "react";
import { FaTimes, FaSearchPlus, FaSearchMinus, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const categories = ["All Projects", "Corporate Offices", "Retail Outlets & Kiosks", "Residential Projects", "Furniture", "Interior Design & Architecture"];

const allProjects = [
  // ─── CORPORATE OFFICES ──────────────────────────────────────────────────────
  { title: "UBL Fund — North Nazimabad", year: "2026", category: "Corporate Offices", images: [
    "/images/projects/corporate/ubl_nn/1.jpeg",
    "/images/projects/corporate/ubl_nn/2.jpeg",
    "/images/projects/corporate/ubl_nn/3.jpeg",
    "/images/projects/corporate/ubl_nn/4.jpeg",
  ]},
  { title: "UBL Funds IT & IS", year: "2024", category: "Corporate Offices", images: [
    "/images/projects/corporate/ubl_it/1.jpeg",
    "/images/projects/corporate/ubl_it/2.jpeg",
    "/images/projects/corporate/ubl_it/3.jpeg",
    "/images/projects/corporate/ubl_it/4.jpeg",
  ]},
  { title: "Prolog Express Line", year: "2024", category: "Corporate Offices", images: [
    "/images/projects/corporate/prolog/1.jpeg",
    "/images/projects/corporate/prolog/2.jpeg",
    "/images/projects/corporate/prolog/3.jpeg",
  ]},
  { title: "AHM Securities", year: "2023", category: "Corporate Offices", images: [
    "/images/projects/corporate/ahm/1.jpg",
    "/images/projects/corporate/ahm/2.jpg",
  ]},
  { title: "Liberty Daharki Power", year: "2023", category: "Corporate Offices", images: [
    "/images/projects/corporate/liberty/1.jpg",
    "/images/projects/corporate/liberty/2.jpg",
    "/images/projects/corporate/liberty/3.jpg",
    "/images/projects/corporate/liberty/4.jpg",
  ]},
  { title: "UBL Funds Cafeteria — 4th Floor", year: "2023", category: "Corporate Offices", images: [
    "/images/projects/corporate/ubl_cafe_4th/1.jpg",
    "/images/projects/corporate/ubl_cafe_4th/2.jpg",
    "/images/projects/corporate/ubl_cafe_4th/3.jpg",
  ]},
  { title: "Tapal Tea", year: "2022", category: "Corporate Offices", images: [
    "/images/projects/corporate/tapal/1.jpg",
    "/images/projects/corporate/tapal/2.jpg",
    "/images/projects/corporate/tapal/3.jpg",
  ]},
  { title: "UBL Funds HR & MKT", year: "2022", category: "Corporate Offices", images: [
    "/images/projects/corporate/ubl_hr/1.jpg",
    "/images/projects/corporate/ubl_hr/2.jpg",
    "/images/projects/corporate/ubl_hr/3.jpg",
    "/images/projects/corporate/ubl_hr/4.jpg",
  ]},
  { title: "Shaheen Complex Lobby", year: "2021", category: "Corporate Offices", images: [
    "/images/projects/corporate/shaheen/1.jpeg",
    "/images/projects/corporate/shaheen/2.jpeg",
    "/images/projects/corporate/shaheen/3.jpeg",
    "/images/projects/corporate/shaheen/4.jpeg",
  ]},
  { title: "MCB Funds Sales Office", year: "2020", category: "Corporate Offices", images: [
    "/images/projects/corporate/mcb_funds/1.jpg",
    "/images/projects/corporate/mcb_funds/2.jpg",
    "/images/projects/corporate/mcb_funds/3.jpg",
    "/images/projects/corporate/mcb_funds/4.jpg",
  ]},
  { title: "iVolve Technologies", year: "2020", category: "Corporate Offices", images: [
    "/images/projects/corporate/ivolve/1.jpg",
    "/images/projects/corporate/ivolve/2.jpg",
  ]},
  { title: "UBL Funds — Peshawar", year: "2025", category: "Corporate Offices", images: [
    "/images/projects/corporate/ubl_peshawar/1.jpeg",
    "/images/projects/corporate/ubl_peshawar/2.jpeg",
    "/images/projects/corporate/ubl_peshawar/3.jpeg",
    "/images/projects/corporate/ubl_peshawar/4.jpeg",
  ]},
  { title: "Oasis Travels", year: "2011", category: "Corporate Offices", images: [
    "/images/projects/corporate/oasis/1.jpg",
    "/images/projects/corporate/oasis/2.jpg",
    "/images/projects/corporate/oasis/3.jpg",
    "/images/projects/corporate/oasis/4.jpg",
  ]},
  { title: "Tradekey Pakistan", year: "2011", category: "Corporate Offices", images: [
    "/images/projects/corporate/tradekey/1.jpg",
    "/images/projects/corporate/tradekey/2.jpg",
    "/images/projects/corporate/tradekey/3.jpg",
  ]},
  { title: "MultiTech", year: "2010", category: "Corporate Offices", images: [
    "/images/projects/corporate/multitech/1.jpg",
    "/images/projects/corporate/multitech/2.jpg",
  ]},
  { title: "I-2 Pakistan", year: "2010", category: "Corporate Offices", images: [
    "/images/projects/corporate/i2/1.jpg",
    "/images/projects/corporate/i2/2.jpg",
    "/images/projects/corporate/i2/3.jpg",
  ]},
  { title: "Haroon Travel", year: "2012", category: "Corporate Offices", images: [
    "/images/projects/corporate/haroon/1.jpg",
    "/images/projects/corporate/haroon/2.jpg",
    "/images/projects/corporate/haroon/3.jpg",
    "/images/projects/corporate/haroon/4.jpg",
  ]},
  { title: "Schlumberger Pakistan", year: "2013", category: "Corporate Offices", images: [
    "/images/projects/corporate/schlumberger/1.jpg",
    "/images/projects/corporate/schlumberger/2.jpg",
    "/images/projects/corporate/schlumberger/3.jpg",
    "/images/projects/corporate/schlumberger/4.jpg",
  ]},
  { title: "Medlife Clinics", year: "2013", category: "Corporate Offices", images: [
    "/images/projects/corporate/medlife/1.jpg",
    "/images/projects/corporate/medlife/2.jpg",
  ]},
  { title: "Ten Sports", year: "2014", category: "Corporate Offices", images: [
    "/images/projects/corporate/ten_sports/1.jpg",
    "/images/projects/corporate/ten_sports/2.jpg",
    "/images/projects/corporate/ten_sports/3.jpg",
    "/images/projects/corporate/ten_sports/4.jpg",
  ]},
  { title: "Lakson Group", year: "2008", category: "Corporate Offices", images: [
    "/images/projects/corporate/lakson/1.jpg",
    "/images/projects/corporate/lakson/2.jpg",
  ]},
  { title: "Master Oil", year: "2008", category: "Corporate Offices", images: [
    "/images/projects/corporate/master_oil/1.jpg",
    "/images/projects/corporate/master_oil/2.jpg",
    "/images/projects/corporate/master_oil/3.jpg",
  ]},
  { title: "Efroze Chemical", year: "2007", category: "Corporate Offices", images: [
    "/images/projects/corporate/efroze/1.jpg",
    "/images/projects/corporate/efroze/2.jpg",
    "/images/projects/corporate/efroze/3.jpg",
  ]},
  { title: "UBL Funds Cafeteria — 2nd Floor", year: "2025", category: "Corporate Offices", images: [
    "/images/projects/corporate/ubl_cafe_2nd/1.jpeg",
    "/images/projects/corporate/ubl_cafe_2nd/2.jpeg",
  ]},

  // ─── RETAIL OUTLETS & KIOSKS ────────────────────────────────────────────────
  { title: "OPTICO — The Opticians", year: "2023", category: "Retail Outlets & Kiosks", images: [
    "/images/projects/retail/optico/1.jpg",
    "/images/projects/retail/optico/2.jpg",
    "/images/projects/retail/optico/3.jpg",
    "/images/projects/retail/optico/4.jpg",
  ]},
  { title: "Ehad Pharmacy", year: "2023", category: "Retail Outlets & Kiosks", images: [
    "/images/projects/retail/ehad/1.jpg",
    "/images/projects/retail/ehad/2.jpg",
    "/images/projects/retail/ehad/3.jpg",
    "/images/projects/retail/ehad/4.jpg",
  ]},
  { title: "Edenrobe Beauty", year: "2024", category: "Retail Outlets & Kiosks", images: [
    "/images/projects/retail/edenrobe/1.jpeg",
    "/images/projects/retail/edenrobe/2.jpeg",
  ]},
  { title: "Swiss Ligna Gloss Display", year: "2024", category: "Retail Outlets & Kiosks", images: [
    "/images/projects/retail/swiss_ligna/1.jpg",
    "/images/projects/retail/swiss_ligna/2.jpg",
    "/images/projects/retail/swiss_ligna/3.jpg",
    "/images/projects/retail/swiss_ligna/4.jpg",
  ]},
  { title: "The Mins Bespoke", year: "2024", category: "Retail Outlets & Kiosks", images: [
    "/images/projects/retail/the_mins/1.jpg",
    "/images/projects/retail/the_mins/2.jpg",
    "/images/projects/retail/the_mins/3.jpg",
    "/images/projects/retail/the_mins/4.jpg",
  ]},
  { title: "Sana Sarah Salon & Spa", year: "2022", category: "Retail Outlets & Kiosks", images: [
    "/images/projects/retail/sana_sarah/1.jpg",
    "/images/projects/retail/sana_sarah/2.jpg",
    "/images/projects/retail/sana_sarah/3.jpg",
    "/images/projects/retail/sana_sarah/4.jpg",
  ]},
  { title: "Jewels", year: "2021", category: "Retail Outlets & Kiosks", images: [
    "/images/projects/retail/jewels/1.jpeg",
    "/images/projects/retail/jewels/2.jpeg",
    "/images/projects/retail/jewels/3.jpeg",
  ]},
  { title: "Ice Creamoo — Atrium Mall", year: "2018", category: "Retail Outlets & Kiosks", images: [
    "/images/projects/retail/ice_creamoo/1.jpg",
    "/images/projects/retail/ice_creamoo/2.jpg",
    "/images/projects/retail/ice_creamoo/3.jpg",
    "/images/projects/retail/ice_creamoo/4.jpg",
  ]},
  { title: "Mehran Food", year: "2018", category: "Retail Outlets & Kiosks", images: [
    "/images/projects/retail/mehran/1.jpg",
    "/images/projects/retail/mehran/2.jpg",
    "/images/projects/retail/mehran/3.jpg",
    "/images/projects/retail/mehran/4.jpg",
  ]},
  { title: "Ideas by Gul Ahmed", year: "2018", category: "Retail Outlets & Kiosks", images: [
    "/images/projects/retail/ideas/1.jpg",
  ]},
  { title: "Jubilee Takaful", year: "2017", category: "Retail Outlets & Kiosks", images: [
    "/images/projects/retail/jubilee/1.jpg",
    "/images/projects/retail/jubilee/2.jpg",
    "/images/projects/retail/jubilee/3.jpg",
    "/images/projects/retail/jubilee/4.jpg",
  ]},
  { title: "Pharmacie Plus", year: "2019", category: "Retail Outlets & Kiosks", images: [
    "/images/projects/retail/pharmacie/1.jpg",
  ]},
  { title: "Eat Festival Mezan", year: "2014", category: "Retail Outlets & Kiosks", images: [
    "/images/projects/retail/eat_mezan/1.jpg",
    "/images/projects/retail/eat_mezan/2.jpg",
  ]},

  // ─── RESIDENTIAL PROJECTS ───────────────────────────────────────────────────
  { title: "Mr. Saad Ahmed Bungalow", year: "2025", category: "Residential Projects", images: [
    "/images/projects/residential/saad/1.jpeg",
    "/images/projects/residential/saad/2.jpeg",
    "/images/projects/residential/saad/3.jpeg",
    "/images/projects/residential/saad/4.jpeg",
  ]},
  { title: "Mr. Kashif Rafi Bungalow", year: "2024", category: "Residential Projects", images: [
    "/images/projects/residential/kashif_rafi/1.jpeg",
    "/images/projects/residential/kashif_rafi/2.jpeg",
    "/images/projects/residential/kashif_rafi/3.jpeg",
    "/images/projects/residential/kashif_rafi/4.jpeg",
  ]},
  { title: "Mr. Umair Ahmed Apartment", year: "2023", category: "Residential Projects", images: [
    "/images/projects/residential/umair/1.jpeg",
    "/images/projects/residential/umair/2.jpeg",
    "/images/projects/residential/umair/3.jpeg",
    "/images/projects/residential/umair/4.jpeg",
  ]},
  { title: "Mr. Muhammad Imran Bungalow", year: "2021", category: "Residential Projects", images: [
    "/images/projects/residential/imran/1.jpg",
    "/images/projects/residential/imran/2.jpg",
    "/images/projects/residential/imran/3.jpg",
    "/images/projects/residential/imran/4.jpg",
  ]},

  // ─── INTERIOR DESIGN & ARCHITECTURE ─────────────────────────────────────────
  { title: "UBL Funds — North Nazimabad", year: "", category: "Interior Design & Architecture", images: [
    "/images/projects/interior_design/ubl_nn/1.jpeg","/images/projects/interior_design/ubl_nn/2.jpeg","/images/projects/interior_design/ubl_nn/3.jpeg","/images/projects/interior_design/ubl_nn/4.jpeg","/images/projects/interior_design/ubl_nn/5.jpeg","/images/projects/interior_design/ubl_nn/6.jpeg","/images/projects/interior_design/ubl_nn/7.jpeg","/images/projects/interior_design/ubl_nn/8.jpeg","/images/projects/interior_design/ubl_nn/9.jpeg","/images/projects/interior_design/ubl_nn/10.jpeg","/images/projects/interior_design/ubl_nn/11.jpeg","/images/projects/interior_design/ubl_nn/12.jpeg","/images/projects/interior_design/ubl_nn/13.jpeg","/images/projects/interior_design/ubl_nn/14.jpeg","/images/projects/interior_design/ubl_nn/15.jpeg","/images/projects/interior_design/ubl_nn/16.jpeg",
  ]},
  { title: "Shaheen Complex", year: "", category: "Interior Design & Architecture", images: [
    "/images/projects/interior_design/shaheen_complex/1.jpg","/images/projects/interior_design/shaheen_complex/2.jpg","/images/projects/interior_design/shaheen_complex/3.jpg","/images/projects/interior_design/shaheen_complex/4.jpg","/images/projects/interior_design/shaheen_complex/5.jpg","/images/projects/interior_design/shaheen_complex/6.jpg","/images/projects/interior_design/shaheen_complex/7.jpg","/images/projects/interior_design/shaheen_complex/8.jpg","/images/projects/interior_design/shaheen_complex/9.jpg","/images/projects/interior_design/shaheen_complex/10.jpg","/images/projects/interior_design/shaheen_complex/11.jpg","/images/projects/interior_design/shaheen_complex/12.jpg","/images/projects/interior_design/shaheen_complex/13.jpg","/images/projects/interior_design/shaheen_complex/14.jpg","/images/projects/interior_design/shaheen_complex/15.jpg","/images/projects/interior_design/shaheen_complex/16.jpg","/images/projects/interior_design/shaheen_complex/17.jpg","/images/projects/interior_design/shaheen_complex/18.jpg","/images/projects/interior_design/shaheen_complex/19.jpg","/images/projects/interior_design/shaheen_complex/20.jpg","/images/projects/interior_design/shaheen_complex/21.jpg","/images/projects/interior_design/shaheen_complex/22.jpg","/images/projects/interior_design/shaheen_complex/23.jpg","/images/projects/interior_design/shaheen_complex/24.jpg","/images/projects/interior_design/shaheen_complex/25.jpg","/images/projects/interior_design/shaheen_complex/26.jpg","/images/projects/interior_design/shaheen_complex/27.jpg","/images/projects/interior_design/shaheen_complex/28.jpg","/images/projects/interior_design/shaheen_complex/29.jpg","/images/projects/interior_design/shaheen_complex/30.jpg",
  ]},
  { title: "Hoechst Waiting Area Lobby", year: "", category: "Interior Design & Architecture", images: [
    "/images/projects/interior_design/hoechst_lobby/1.jpeg","/images/projects/interior_design/hoechst_lobby/2.jpeg","/images/projects/interior_design/hoechst_lobby/3.jpeg","/images/projects/interior_design/hoechst_lobby/4.jpeg","/images/projects/interior_design/hoechst_lobby/5.jpeg","/images/projects/interior_design/hoechst_lobby/6.jpeg","/images/projects/interior_design/hoechst_lobby/7.jpeg","/images/projects/interior_design/hoechst_lobby/8.jpeg","/images/projects/interior_design/hoechst_lobby/9.jpeg","/images/projects/interior_design/hoechst_lobby/10.jpeg","/images/projects/interior_design/hoechst_lobby/11.jpeg","/images/projects/interior_design/hoechst_lobby/12.jpeg","/images/projects/interior_design/hoechst_lobby/13.jpeg","/images/projects/interior_design/hoechst_lobby/14.jpeg","/images/projects/interior_design/hoechst_lobby/15.jpeg","/images/projects/interior_design/hoechst_lobby/16.jpeg","/images/projects/interior_design/hoechst_lobby/17.jpeg","/images/projects/interior_design/hoechst_lobby/18.jpeg","/images/projects/interior_design/hoechst_lobby/19.jpeg","/images/projects/interior_design/hoechst_lobby/20.jpeg","/images/projects/interior_design/hoechst_lobby/21.jpeg","/images/projects/interior_design/hoechst_lobby/22.jpeg","/images/projects/interior_design/hoechst_lobby/23.jpeg","/images/projects/interior_design/hoechst_lobby/24.jpeg","/images/projects/interior_design/hoechst_lobby/25.jpeg","/images/projects/interior_design/hoechst_lobby/26.jpeg","/images/projects/interior_design/hoechst_lobby/27.jpeg","/images/projects/interior_design/hoechst_lobby/28.jpeg","/images/projects/interior_design/hoechst_lobby/29.jpeg",
  ]},
  { title: "Hoechst Board Room", year: "", category: "Interior Design & Architecture", images: [
    "/images/projects/interior_design/hoechst_boardroom/1.jpeg","/images/projects/interior_design/hoechst_boardroom/2.jpeg","/images/projects/interior_design/hoechst_boardroom/3.jpeg","/images/projects/interior_design/hoechst_boardroom/4.jpeg","/images/projects/interior_design/hoechst_boardroom/5.jpeg","/images/projects/interior_design/hoechst_boardroom/6.jpeg","/images/projects/interior_design/hoechst_boardroom/7.jpeg","/images/projects/interior_design/hoechst_boardroom/8.jpeg","/images/projects/interior_design/hoechst_boardroom/9.jpeg","/images/projects/interior_design/hoechst_boardroom/10.jpeg","/images/projects/interior_design/hoechst_boardroom/11.jpeg","/images/projects/interior_design/hoechst_boardroom/12.jpeg","/images/projects/interior_design/hoechst_boardroom/13.jpeg","/images/projects/interior_design/hoechst_boardroom/14.jpeg","/images/projects/interior_design/hoechst_boardroom/15.jpeg","/images/projects/interior_design/hoechst_boardroom/16.jpeg","/images/projects/interior_design/hoechst_boardroom/17.jpeg","/images/projects/interior_design/hoechst_boardroom/18.jpeg","/images/projects/interior_design/hoechst_boardroom/19.jpeg","/images/projects/interior_design/hoechst_boardroom/20.jpeg","/images/projects/interior_design/hoechst_boardroom/21.jpeg","/images/projects/interior_design/hoechst_boardroom/22.jpeg","/images/projects/interior_design/hoechst_boardroom/23.jpeg","/images/projects/interior_design/hoechst_boardroom/24.jpeg","/images/projects/interior_design/hoechst_boardroom/25.jpeg","/images/projects/interior_design/hoechst_boardroom/26.jpeg","/images/projects/interior_design/hoechst_boardroom/27.jpeg","/images/projects/interior_design/hoechst_boardroom/28.jpeg",
  ]},
  { title: "Mr. Maaz Residence", year: "", category: "Interior Design & Architecture", images: [
    "/images/projects/interior_design/maaz_residence/1.jpeg","/images/projects/interior_design/maaz_residence/2.jpeg","/images/projects/interior_design/maaz_residence/3.jpeg","/images/projects/interior_design/maaz_residence/4.jpeg","/images/projects/interior_design/maaz_residence/5.jpeg","/images/projects/interior_design/maaz_residence/6.jpeg","/images/projects/interior_design/maaz_residence/7.jpeg","/images/projects/interior_design/maaz_residence/8.jpeg","/images/projects/interior_design/maaz_residence/9.jpeg","/images/projects/interior_design/maaz_residence/10.jpeg","/images/projects/interior_design/maaz_residence/11.jpeg","/images/projects/interior_design/maaz_residence/12.jpeg","/images/projects/interior_design/maaz_residence/13.jpeg","/images/projects/interior_design/maaz_residence/14.jpeg","/images/projects/interior_design/maaz_residence/15.jpeg","/images/projects/interior_design/maaz_residence/16.jpeg","/images/projects/interior_design/maaz_residence/17.jpeg","/images/projects/interior_design/maaz_residence/18.jpeg","/images/projects/interior_design/maaz_residence/19.jpeg","/images/projects/interior_design/maaz_residence/20.jpeg","/images/projects/interior_design/maaz_residence/21.jpeg","/images/projects/interior_design/maaz_residence/22.jpeg","/images/projects/interior_design/maaz_residence/23.jpeg","/images/projects/interior_design/maaz_residence/24.jpeg","/images/projects/interior_design/maaz_residence/25.jpeg","/images/projects/interior_design/maaz_residence/26.jpeg","/images/projects/interior_design/maaz_residence/27.jpeg",
  ]},
  { title: "Zarsh Pvt. Ltd.", year: "", category: "Interior Design & Architecture", images: [
    "/images/projects/interior_design/zarsh/1.jpeg","/images/projects/interior_design/zarsh/2.jpeg","/images/projects/interior_design/zarsh/3.jpeg","/images/projects/interior_design/zarsh/4.jpeg","/images/projects/interior_design/zarsh/5.jpeg","/images/projects/interior_design/zarsh/6.jpeg","/images/projects/interior_design/zarsh/7.jpeg","/images/projects/interior_design/zarsh/8.jpeg","/images/projects/interior_design/zarsh/9.jpeg","/images/projects/interior_design/zarsh/10.jpeg","/images/projects/interior_design/zarsh/11.jpeg","/images/projects/interior_design/zarsh/12.jpeg","/images/projects/interior_design/zarsh/13.jpeg","/images/projects/interior_design/zarsh/14.jpeg","/images/projects/interior_design/zarsh/15.jpeg","/images/projects/interior_design/zarsh/16.jpeg","/images/projects/interior_design/zarsh/17.jpeg","/images/projects/interior_design/zarsh/18.jpeg","/images/projects/interior_design/zarsh/19.jpeg","/images/projects/interior_design/zarsh/20.jpeg","/images/projects/interior_design/zarsh/21.jpeg","/images/projects/interior_design/zarsh/22.jpeg","/images/projects/interior_design/zarsh/23.jpeg","/images/projects/interior_design/zarsh/24.jpeg","/images/projects/interior_design/zarsh/25.jpeg","/images/projects/interior_design/zarsh/26.jpeg","/images/projects/interior_design/zarsh/27.jpeg",
  ]},
  { title: "Amreen Hirani Residence", year: "", category: "Interior Design & Architecture", images: [
    "/images/projects/interior_design/amreen_hirani/1.jpeg","/images/projects/interior_design/amreen_hirani/2.jpeg","/images/projects/interior_design/amreen_hirani/3.jpeg","/images/projects/interior_design/amreen_hirani/4.jpeg","/images/projects/interior_design/amreen_hirani/5.jpeg","/images/projects/interior_design/amreen_hirani/6.jpeg","/images/projects/interior_design/amreen_hirani/7.jpeg","/images/projects/interior_design/amreen_hirani/8.jpeg","/images/projects/interior_design/amreen_hirani/9.jpeg","/images/projects/interior_design/amreen_hirani/10.jpeg","/images/projects/interior_design/amreen_hirani/11.jpeg","/images/projects/interior_design/amreen_hirani/12.jpeg","/images/projects/interior_design/amreen_hirani/13.jpeg","/images/projects/interior_design/amreen_hirani/14.jpeg","/images/projects/interior_design/amreen_hirani/15.jpeg","/images/projects/interior_design/amreen_hirani/16.jpeg","/images/projects/interior_design/amreen_hirani/17.jpeg","/images/projects/interior_design/amreen_hirani/18.jpeg","/images/projects/interior_design/amreen_hirani/19.jpeg","/images/projects/interior_design/amreen_hirani/20.jpeg","/images/projects/interior_design/amreen_hirani/21.jpeg","/images/projects/interior_design/amreen_hirani/22.jpeg",
  ]},
  { title: "Kitchen & Residential", year: "", category: "Interior Design & Architecture", images: [
    "/images/projects/interior_design/kitchen_residential/1.jpeg","/images/projects/interior_design/kitchen_residential/2.jpeg","/images/projects/interior_design/kitchen_residential/3.jpeg","/images/projects/interior_design/kitchen_residential/4.jpeg","/images/projects/interior_design/kitchen_residential/5.jpeg","/images/projects/interior_design/kitchen_residential/6.jpg","/images/projects/interior_design/kitchen_residential/7.jpg","/images/projects/interior_design/kitchen_residential/8.jpg","/images/projects/interior_design/kitchen_residential/9.jpg","/images/projects/interior_design/kitchen_residential/10.jpg","/images/projects/interior_design/kitchen_residential/11.jpg","/images/projects/interior_design/kitchen_residential/12.jpg","/images/projects/interior_design/kitchen_residential/13.jpg","/images/projects/interior_design/kitchen_residential/14.jpg","/images/projects/interior_design/kitchen_residential/15.jpg","/images/projects/interior_design/kitchen_residential/16.jpg","/images/projects/interior_design/kitchen_residential/17.jpg","/images/projects/interior_design/kitchen_residential/18.jpg","/images/projects/interior_design/kitchen_residential/19.jpg","/images/projects/interior_design/kitchen_residential/20.jpg","/images/projects/interior_design/kitchen_residential/21.jpg","/images/projects/interior_design/kitchen_residential/22.jpg","/images/projects/interior_design/kitchen_residential/23.jpeg","/images/projects/interior_design/kitchen_residential/24.jpeg",
  ]},
  { title: "Furniture Designs", year: "", category: "Interior Design & Architecture", images: [
    "/images/projects/interior_design/furniture_designs/1.jpeg","/images/projects/interior_design/furniture_designs/2.jpeg","/images/projects/interior_design/furniture_designs/3.jpeg","/images/projects/interior_design/furniture_designs/4.jpeg","/images/projects/interior_design/furniture_designs/5.jpeg","/images/projects/interior_design/furniture_designs/6.jpeg","/images/projects/interior_design/furniture_designs/7.jpeg","/images/projects/interior_design/furniture_designs/8.jpeg","/images/projects/interior_design/furniture_designs/9.jpeg","/images/projects/interior_design/furniture_designs/10.jpeg","/images/projects/interior_design/furniture_designs/11.jpeg","/images/projects/interior_design/furniture_designs/12.jpeg","/images/projects/interior_design/furniture_designs/13.jpeg","/images/projects/interior_design/furniture_designs/14.jpeg","/images/projects/interior_design/furniture_designs/15.jpeg","/images/projects/interior_design/furniture_designs/16.jpeg",
  ]},
  { title: "Eura Shipping", year: "", category: "Interior Design & Architecture", images: [
    "/images/projects/interior_design/eura_shipping/1.jpeg","/images/projects/interior_design/eura_shipping/2.jpeg","/images/projects/interior_design/eura_shipping/3.jpeg","/images/projects/interior_design/eura_shipping/4.jpeg","/images/projects/interior_design/eura_shipping/5.jpeg","/images/projects/interior_design/eura_shipping/6.jpeg","/images/projects/interior_design/eura_shipping/7.jpeg","/images/projects/interior_design/eura_shipping/8.jpeg","/images/projects/interior_design/eura_shipping/9.jpeg","/images/projects/interior_design/eura_shipping/10.jpeg","/images/projects/interior_design/eura_shipping/11.jpeg","/images/projects/interior_design/eura_shipping/12.jpeg","/images/projects/interior_design/eura_shipping/13.jpeg",
  ]},
  { title: "SJA Salon & SPA", year: "", category: "Interior Design & Architecture", images: [
    "/images/projects/interior_design/sja_salon/1.jpeg","/images/projects/interior_design/sja_salon/2.jpeg","/images/projects/interior_design/sja_salon/3.jpeg","/images/projects/interior_design/sja_salon/4.jpeg","/images/projects/interior_design/sja_salon/5.jpeg","/images/projects/interior_design/sja_salon/6.jpeg","/images/projects/interior_design/sja_salon/7.jpeg","/images/projects/interior_design/sja_salon/8.jpeg","/images/projects/interior_design/sja_salon/9.jpeg","/images/projects/interior_design/sja_salon/10.jpeg","/images/projects/interior_design/sja_salon/11.jpeg","/images/projects/interior_design/sja_salon/12.jpeg","/images/projects/interior_design/sja_salon/13.jpeg","/images/projects/interior_design/sja_salon/14.jpeg","/images/projects/interior_design/sja_salon/15.jpeg",
  ]},
  { title: "Hoechst Gym & Gaming Room", year: "", category: "Interior Design & Architecture", images: [
    "/images/projects/interior_design/hoechst_gym/1.jpeg","/images/projects/interior_design/hoechst_gym/2.jpeg","/images/projects/interior_design/hoechst_gym/3.jpeg","/images/projects/interior_design/hoechst_gym/4.jpeg","/images/projects/interior_design/hoechst_gym/5.jpeg","/images/projects/interior_design/hoechst_gym/6.jpeg","/images/projects/interior_design/hoechst_gym/7.jpeg","/images/projects/interior_design/hoechst_gym/8.jpeg","/images/projects/interior_design/hoechst_gym/9.jpeg","/images/projects/interior_design/hoechst_gym/10.jpeg","/images/projects/interior_design/hoechst_gym/11.jpeg","/images/projects/interior_design/hoechst_gym/12.jpeg","/images/projects/interior_design/hoechst_gym/13.jpeg","/images/projects/interior_design/hoechst_gym/14.jpeg","/images/projects/interior_design/hoechst_gym/15.jpeg",
  ]},
  { title: "The Mins", year: "", category: "Interior Design & Architecture", images: [
    "/images/projects/interior_design/the_mins/1.jpg","/images/projects/interior_design/the_mins/2.jpg","/images/projects/interior_design/the_mins/3.jpg","/images/projects/interior_design/the_mins/4.jpg","/images/projects/interior_design/the_mins/5.jpg","/images/projects/interior_design/the_mins/6.jpg","/images/projects/interior_design/the_mins/7.jpg","/images/projects/interior_design/the_mins/8.jpg","/images/projects/interior_design/the_mins/9.jpg","/images/projects/interior_design/the_mins/10.jpg","/images/projects/interior_design/the_mins/11.jpg","/images/projects/interior_design/the_mins/12.jpg",
  ]},
  { title: "AHM Securities", year: "", category: "Interior Design & Architecture", images: [
    "/images/projects/interior_design/ahm_securities/1.jpg","/images/projects/interior_design/ahm_securities/2.jpg","/images/projects/interior_design/ahm_securities/3.jpg","/images/projects/interior_design/ahm_securities/4.jpg","/images/projects/interior_design/ahm_securities/5.jpg","/images/projects/interior_design/ahm_securities/6.jpg","/images/projects/interior_design/ahm_securities/7.jpg","/images/projects/interior_design/ahm_securities/8.jpg",
  ]},
  { title: "Dr. Saqib — The Dental Clinic", year: "", category: "Interior Design & Architecture", images: [
    "/images/projects/interior_design/dr_saqib/1.jpeg","/images/projects/interior_design/dr_saqib/2.jpeg","/images/projects/interior_design/dr_saqib/3.jpeg","/images/projects/interior_design/dr_saqib/4.jpeg","/images/projects/interior_design/dr_saqib/5.jpeg","/images/projects/interior_design/dr_saqib/6.jpeg","/images/projects/interior_design/dr_saqib/7.jpeg",
  ]},
  { title: "MCB Arif Habib", year: "", category: "Interior Design & Architecture", images: [
    "/images/projects/interior_design/mcb_arif_habib/1.jpg","/images/projects/interior_design/mcb_arif_habib/2.jpg","/images/projects/interior_design/mcb_arif_habib/3.jpg","/images/projects/interior_design/mcb_arif_habib/4.jpg","/images/projects/interior_design/mcb_arif_habib/5.jpg",
  ]},
  { title: "Tree House Cafe", year: "", category: "Interior Design & Architecture", images: [
    "/images/projects/interior_design/tree_house_cafe/1.jpeg","/images/projects/interior_design/tree_house_cafe/2.jpeg","/images/projects/interior_design/tree_house_cafe/3.jpeg","/images/projects/interior_design/tree_house_cafe/4.jpeg","/images/projects/interior_design/tree_house_cafe/5.jpeg",
  ]},
  { title: "Liberty Power", year: "", category: "Interior Design & Architecture", images: [
    "/images/projects/interior_design/liberty_power/1.jpg","/images/projects/interior_design/liberty_power/2.jpg","/images/projects/interior_design/liberty_power/3.jpg","/images/projects/interior_design/liberty_power/4.jpg",
  ]},
  { title: "Pharmacie Plus", year: "", category: "Interior Design & Architecture", images: [
    "/images/projects/interior_design/pharmacie_plus/1.jpg","/images/projects/interior_design/pharmacie_plus/2.jpg","/images/projects/interior_design/pharmacie_plus/3.jpg","/images/projects/interior_design/pharmacie_plus/4.jpg",
  ]},
  { title: "Hoechst Reception", year: "", category: "Interior Design & Architecture", images: [
    "/images/projects/interior_design/hoechst_reception/1.jpeg","/images/projects/interior_design/hoechst_reception/2.jpeg","/images/projects/interior_design/hoechst_reception/3.jpeg","/images/projects/interior_design/hoechst_reception/4.jpeg",
  ]},
  { title: "Icecreamo", year: "", category: "Interior Design & Architecture", images: [
    "/images/projects/interior_design/icecreamo/1.jpg","/images/projects/interior_design/icecreamo/2.jpg","/images/projects/interior_design/icecreamo/3.jpg","/images/projects/interior_design/icecreamo/4.jpg",
  ]},
  { title: "Qatar Airways", year: "", category: "Interior Design & Architecture", images: [
    "/images/projects/interior_design/qatar_airways/1.jpg","/images/projects/interior_design/qatar_airways/2.jpg","/images/projects/interior_design/qatar_airways/3.jpg",
  ]},
  { title: "Cotton & Silk", year: "", category: "Interior Design & Architecture", images: [
    "/images/projects/interior_design/cotton_silk/1.jpg","/images/projects/interior_design/cotton_silk/2.jpg","/images/projects/interior_design/cotton_silk/3.jpg",
  ]},
  { title: "Mr. Mithani — Daughter's Room", year: "", category: "Interior Design & Architecture", images: [
    "/images/projects/interior_design/mithani_room/1.jpeg","/images/projects/interior_design/mithani_room/2.jpeg",
  ]},
  { title: "AE Mohammadi", year: "", category: "Interior Design & Architecture", images: [
    "/images/projects/interior_design/ae_mohammadi/1.jpeg",
  ]},
  { title: "LA Kid", year: "", category: "Interior Design & Architecture", images: [
    "/images/projects/interior_design/la_kid/1.jpg",
  ]},

  // ─── FURNITURE ──────────────────────────────────────────────────────────────
  { title: "Office Furniture", year: "2024", category: "Furniture", images: [
    "/images/projects/furniture/office/1.jpg",
    "/images/projects/furniture/office/2.jpg",
    "/images/projects/furniture/office/3.jpg",
    "/images/projects/furniture/office/4.jpg",
    "/images/projects/furniture/office/5.jpg",
    "/images/projects/furniture/office/6.jpg",
  ]},
  { title: "Residential Furniture", year: "2024", category: "Furniture", images: [
    "/images/projects/furniture/residential/1.jpg",
    "/images/projects/furniture/residential/2.jpg",
    "/images/projects/furniture/residential/3.jpg",
    "/images/projects/furniture/residential/4.jpg",
    "/images/projects/furniture/residential/5.jpg",
    "/images/projects/furniture/residential/6.jpg",
  ]},
];

const folders = ["Corporate Offices", "Retail Outlets & Kiosks", "Residential Projects", "Furniture", "Interior Design & Architecture"];

type Project = (typeof allProjects)[number];

function Lightbox({ project, onClose }: { project: Project; onClose: () => void }) {
  const [zoom, setZoom] = useState(1);
  const [idx, setIdx] = useState(0);
  const total = project.images.length;

  const prev = useCallback(() => { setZoom(1); setIdx((i) => (i - 1 + total) % total); }, [total]);
  const next = useCallback(() => { setZoom(1); setIdx((i) => (i + 1) % total); }, [total]);

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    if (e.key === "+" || e.key === "=") setZoom((z) => Math.min(z + 0.25, 3));
    if (e.key === "-") setZoom((z) => Math.max(z - 0.25, 1));
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  }, [onClose, prev, next]);

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 flex flex-col" onClick={onClose}>
      <div className="flex items-center justify-between px-5 py-3 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
        <div>
          <p className="text-white font-semibold text-sm">{project.title}</p>
          <p className="text-white/60 text-xs">{project.category} · {project.year}{total > 1 ? ` · ${idx + 1}/${total}` : ""}</p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setZoom((z) => Math.max(z - 0.25, 1))} disabled={zoom <= 1}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white disabled:opacity-30 transition-colors">
            <FaSearchMinus className="text-sm" />
          </button>
          <span className="text-white/70 text-xs w-10 text-center">{Math.round(zoom * 100)}%</span>
          <button onClick={() => setZoom((z) => Math.min(z + 0.25, 3))} disabled={zoom >= 3}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white disabled:opacity-30 transition-colors">
            <FaSearchPlus className="text-sm" />
          </button>
          <button onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors ml-2">
            <FaTimes />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto flex items-center justify-center p-4 relative" onClick={(e) => e.stopPropagation()}>
        {total > 1 && (
          <button onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors z-10">
            <FaChevronLeft />
          </button>
        )}
        <img
          src={project.images[idx]}
          alt={project.title}
          style={{ transform: `scale(${zoom})`, transformOrigin: "center center", transition: "transform 0.2s ease" }}
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          draggable={false}
        />
        {total > 1 && (
          <button onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors z-10">
            <FaChevronRight />
          </button>
        )}
      </div>

      {total > 1 && (
        <div className="flex justify-center gap-1.5 pb-4 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
          {project.images.map((_, i) => (
            <button key={i} onClick={() => { setZoom(1); setIdx(i); }}
              className={`w-2 h-2 rounded-full transition-all ${i === idx ? "bg-[#E84520] scale-125" : "bg-white/40 hover:bg-white/70"}`} />
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectCard({ p, i, onOpen }: { p: Project; i: number; onOpen: (p: Project) => void }) {
  return (
    <div
      className="group relative overflow-hidden rounded-lg cursor-pointer aspect-square"
      data-aos="fade-up"
      data-aos-delay={Math.min(i * 30, 200)}
      onClick={() => onOpen(p)}
    >
      <img
        src={p.images[0]}
        alt={p.title}
        loading={i < 6 ? "eager" : "lazy"}
        decoding="async"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <FaSearchPlus className="text-white text-sm" />
        </div>
      </div>
      {p.images.length > 1 && (
        <div className="absolute top-2 right-2 bg-black/50 text-white text-[9px] px-1.5 py-0.5 rounded-full backdrop-blur-sm">
          {p.images.length} photos
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <p className="text-white text-xs font-semibold">{p.title}</p>
        <p className="text-white/75 text-[10px] tracking-wide">{p.year}</p>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const [active, setActive] = useState("All Projects");
  const [lightbox, setLightbox] = useState<Project | null>(null);

  return (
    <section className="pt-32 sm:pt-36 pb-16 sm:pb-20 bg-white min-h-screen">
      {lightbox && <Lightbox project={lightbox} onClose={() => setLightbox(null)} />}

      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#080708]" style={{ fontFamily: "var(--font-playfair), serif" }}>
            Projects
          </h1>
          <p className="text-[#4c505b] text-sm mt-3 max-w-lg mx-auto">
            AMGYS Interiors team works closely with clients throughout the design
            process to ensure that their vision becomes a reality — always going the extra
            mile to exceed expectations.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 sm:px-5 py-1.5 rounded-full text-[11px] sm:text-xs font-medium tracking-[1px] transition-all border ${
                active === cat
                  ? "bg-[#1a1a2e] text-white border-[#1a1a2e]"
                  : "bg-white text-[#4c505b] border-gray-300 hover:border-gray-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {active === "All Projects" ? (
          <div className="space-y-14">
            {folders.map((folder) => {
              const items = allProjects.filter((p) => p.category === folder);
              if (items.length === 0) return null;
              return (
                <div key={folder}>
                  <div className="flex items-baseline justify-between mb-5 border-b border-gray-200 pb-2">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#080708]" style={{ fontFamily: "var(--font-playfair), serif" }}>
                      {folder}
                    </h2>
                    <span className="text-[11px] text-[#4c505b] tracking-wider uppercase">
                      {items.length} projects
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {items.map((p, i) => (
                      <ProjectCard key={`${p.title}-${i}`} p={p} i={i} onOpen={setLightbox} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {allProjects
              .filter((p) => p.category === active)
              .map((p, i) => (
                <ProjectCard key={`${p.title}-${i}`} p={p} i={i} onOpen={setLightbox} />
              ))}
          </div>
        )}
      </div>
    </section>
  );
}
