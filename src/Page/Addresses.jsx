import React, { useState, useEffect } from "react";
import "./Addresses.css";
import { Row, Col, Container, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import { PiX } from "react-icons/pi";

function Addresses() {
  const details = [
    {
      id: 1,
      name: "Mcdonald's",
      store:"Map",
      address:
        "Shop No 46, Ground Floor, Maruti Mall Maruti Solaris, Anand - Sojitra Rd, near Madhuban Resort, Anand, Gujarat 388001",
      latitude: 22.57901492628373,
      longitude: 72.93518917905337,
      code: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701137.808485938!2d69.92433212699791!3d20.772880378867146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4c2d2604e4c9%3A0xaada71b5224d21a9!2sMcDonald&#39;s!5e0!3m2!1sen!2sin!4v1744778750155!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
    },
    {
      id: 2,
      name: "Mcdonald's",
      store:"Map",
      address:
        "Survey No. 445, Subb, Belek No. 574, Plot No. 3, Taluka, near Chhatrala Multiplex, Moje, Umbhel, Kamrej, Gujarat 394327",
      latitude: 21.22330143404815,
      longitude: 72.97027274800654,
      code: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701137.808485938!2d69.92433212699791!3d20.772880378867146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be044cf5c98c9d7%3A0x2e8a8b9d8fe781b4!2sMcDonald&#39;s!5e0!3m2!1sen!2sin!4v1744778822644!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
    },
    {
      id: 3,
      name: "Mcdonald's",
      store:"Map",
      address:
        "Ground floor, school, Laxmi enclave, 2, near Gajera Road, Rajanand Society, Ram Nagar Society, Katargam, Surat, Gujarat 395004",
      latitude: 21.363687030104135,
      longitude: 72.81421656641088,
      code: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701137.808485938!2d69.92433212699791!3d20.772880378867146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f334780aaf5%3A0xdbc284948160baa4!2zTWNEb25hbGTigJlz!5e0!3m2!1sen!2sin!4v1744779078907!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
    },
    {
      id: 4,
      name: "Mcdonald's",
      store:"Map",
      address:
        "Survey No 467, Plot No. 461/B, NH 8, Mumbai Ahmedabad Highway, Surat - Kamrej Hwy, near Old Tigri Hotel, Surat, Gujarat 394180",
      latitude: 21.472167403999364,
      longitude: 72.96181819100455,
      code: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701137.808485938!2d69.92433212699791!3d20.772880378867146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be047b6411fd095%3A0x8e0a08c48ac8fb8b!2sMcDonald&#39;s!5e0!3m2!1sen!2sin!4v1744779108971!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
    },
    {
      id: 5,
      name: "Mcdonald's",
      store:"Map",
      address:
        "Ground Floor, NH 8, near Cheverolet Showroom, Vadadla, Bharuch, Gujarat 392015",
      latitude: 21.825867611605663,
      longitude: 73.02523421743636,
      code: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1599733.5758877913!2d71.49628509605314!3d21.36416162896307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f8b63a8cf9c87%3A0xfbe1c913a56b38f8!2sMcDonald&#39;s!5e0!3m2!1sen!2sin!4v1744779149579!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
    },
    {
      id: 6,
      name: "Mcdonald's",
      store:"Map",
      address:
        "Plot no. 422&423, Statue of Unity, Ekta Nagar, Kevadia, Gujarat 393155",
      latitude: 21.9630199352404,
      longitude: 73.6811580096914,
      code: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1599733.5758877913!2d71.49628509605314!3d21.36416162896307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39601d4be739a2e1%3A0xee5253c934a88035!2sMcDonald&#39;s!5e0!3m2!1sen!2sin!4v1744779238499!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
    },
    {
      id: 7,
      name: "Mcdonald's",
      store:"Map",
      address:
        "Mumbai-Delhi Expressway (Ch, 347, BPCL, Goriyad, Vadodara, Gujarat 391440",
      latitude: 22.27967697569085,
      longitude: 73.07142603379235,
      code: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1599733.5758877913!2d71.49628509605314!3d21.36416162896307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc719bc388869%3A0x5df75b9ea1af010e!2sMcDonald&#39;s!5e0!3m2!1sen!2sin!4v1744779523353!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
    },
    {
      id: 8,
      name: "Mcdonald's",
      store:"Map",
      address:
        "Survey No 385/1 & 390 NH 8, opposite L&T Knowledge City, near Taksh Galaxy, Madhavpura, Vadodara, Gujarat 390019",
      latitude: 22.373680659308064,
      longitude: 73.2608124808519,
      code: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1599733.5758877913!2d71.49628509605314!3d21.36416162896307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcfb50a22ca59%3A0x3f1be96d009c4e2f!2sMcDonald&#39;s!5e0!3m2!1sen!2sin!4v1744779679120!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
    },
    {
      id: 9,
      name: "Mcdonald's",
      store:"Map",
      address:
        "Shop No 19 to 34, Siddhartha Annexe F Vaimali Road, Sama Savli, near Prasang Party Plot, Vadodara, Gujarat 390008",
      latitude: 22.454814610555186,
      longitude: 73.20076311958911,
      code: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1599733.5758877913!2d71.49628509605314!3d21.36416162896307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcedec6b330fb%3A0xa1ab48b992c685b9!2sMcDonald&#39;s!5e0!3m2!1sen!2sin!4v1744779732329!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
    },
    {
      id: 10,
      name: "Mcdonald's",
      store:"Map",
      address:
        "Ground Floor, The New World, Old Padra Rd, near Gail India Office, Manisha Chowkdi, Vadodara, Gujarat 390020",
      latitude: 22.32804162779571,
      longitude: 73.17493968572934,
      code: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d670846.7436062123!2d72.54569065456685!3d21.7438633155967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc61dfcbca697%3A0x275933c97d7e53f4!2sMcDonald&#39;s!5e0!3m2!1sen!2sin!4v1744779803832!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
    },
    {
      id: 11,
      name: "Mcdonald's",
      store:"Map",
      address: "18, NH 47, Changodar, Gujarat 382213",
      latitude: 22.942670668489537,
      longitude: 72.43857836232125,
      code: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235071.62578971777!2d72.34176135269841!3d22.987242493272653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e90c4f484cb83%3A0xa522a036bc45a32f!2sMcDonald&#39;s!5e0!3m2!1sen!2sin!4v1744779864200!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
    },
    {
      id: 12,
      name: "Mcdonald's",
      store:"Map",
      address:
        "Pegasus Commercial CHS, A 04 & A 05, 100 Feet Rd, Anand Nagar, Prahlad Nagar, Ahmedabad, Gujarat 380015",
      latitude: 23.02295256253445,
      longitude: 72.509302844528,
      code: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235071.62578971777!2d72.34176135269841!3d22.987242493272653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b77cf4dbb15%3A0x204b1c3b96ae2c07!2sMcDonald&#39;s!5e0!3m2!1sen!2sin!4v1744779900279!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
    },
    {
      id: 13,
      name: "Mcdonald's",
      store:"Map",
      address:
        "SN 1, Hardcastle Restaurants Pvt Ltd Bopal Amli, junction, Sardar Patel Ring Rd, Ahmedabad, Gujarat 380058",
      latitude: 23.041277953233067,
      longitude: 72.4708506988622,
      code: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235071.62578971777!2d72.34176135269841!3d22.987242493272653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9baa656a535d%3A0x42c288f53d932a8!2sMcDonald&#39;s!5e0!3m2!1sen!2sin!4v1744779962631!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
    },
    {
      id: 14,
      name: "Mcdonald's",
      store:"Map",
      address:
        "Himalaya Mall, 38, Drive In Rd, next to Indraprasth Tower, Nilmani Society, Memnagar, Ahmedabad, Gujarat 380015",
      latitude: 23.058337283301206,
      longitude: 72.5360820174024,
      code: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235069.42540029305!2d72.34176135269841!3d22.98850672784633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84b01e0c5c2f%3A0x4489e5479459fa5b!2sMcDonald&#39;s!5e0!3m2!1sen!2sin!4v1744780009607!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
    },
    {
      id: 15,
      name: "Mcdonald's",
      store:"Map",
      address:
        "Near, Shop No G 1, 2 F 1A, GF, Yash Pinnacle, Anjali Cross Rd, Paldi, Ahmedabad, Gujarat 380004",
      latitude: 23.023584514059685,
      longitude: 72.55736802661028,
      code: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235069.42540029305!2d72.34176135269841!3d22.98850672784633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e851ac2ef5be7%3A0xac5f01a8e7db1dc9!2sMcDonald&#39;s!5e0!3m2!1sen!2sin!4v1744780054951!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
    },
    {
      id: 16,
      name: "Mcdonald's",
      store:"Map",
      address:
        "Reliance Mall, Advance Mills Compound, Main Road, opposite Swaminarayan Temple, Shahibag, Ahmedabad, Gujarat 380004",
      latitude: 23.054546507852628,
      longitude: 72.58689378131793,
      code: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235069.42540029305!2d72.34176135269841!3d22.98850672784633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e859419cad7a3%3A0x8c777aaff18667cc!2sMcDonald&#39;s!5e0!3m2!1sen!2sin!4v1744780224902!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
    },
    {
      id: 17,
      name: "Mcdonald's",
      store:"Map",
      address:
        "Center Mall, Panchavati Society, Gulbai Tekra, Ahmedabad, Gujarat 380006",
      latitude: 23.026768831169875,
      longitude: 72.55672340565032,
      code: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107813.42745489668!2d72.44968177319093!3d22.946341048420877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84fb470b0441%3A0x1132ed38f2f57092!2sMcDonald&#39;s!5e0!3m2!1sen!2sin!4v1744780375406!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
    },
    {
      id: 18,
      name: "Mcdonald's",
      store:"Map",
      address:
        "Ground & 1st Floor, Yash Aqua, 120 Feet Ring Rd, near Rasranjan Sweet Shop, AEC Char Rasta, University Area, Ahmedabad, Gujarat 380009",
      latitude: 23.04565115521077,
      longitude: 72.54900706778888,
      code: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76212.82710225142!2d72.4808861900257!3d22.98674365378717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84941f69765b%3A0xfd1e7b4e85fb08c1!2sMcDonald&#39;s!5e0!3m2!1sen!2sin!4v1744780430133!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
    },
    {
      id: 19,
      name: "Mcdonald's",
      store:"Map",
      address:
        "Ground Floor, City Gold Mall, Ashram Rd, Ahmedabad, Gujarat 380009",
      latitude: 23.035408220913595,
      longitude: 72.57015570631012,
      code: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76212.82710225142!2d72.4808861900257!3d22.98674365378717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8458e6f322df%3A0xec7a6f52c186f84!2sMcDonald&#39;s!5e0!3m2!1sen!2sin!4v1744780481605!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
    },
    {
      id: 20,
      name: "Mcdonald's",
      store:"Map",
      address:
        "Shop No. 01,02,101 Pramukh Tangent, Sargasan Cross Rd, Gandhinagar, Gujarat 382421",
      latitude: 23.23087082855346,
      longitude: 72.61594915467941,
      code: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d610627.9296988508!2d71.7967176835406!3d22.780887096204953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b9560f868ed%3A0xbc333870ee32e837!2sMcDonald&#39;s!5e0!3m2!1sen!2sin!4v1744780540573!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
    },
  ];

  const [activeId, setActiveId] = useState(1);
  const activeLocation = details.find((ele) => ele.id === activeId);

  return (
    <div>
      <div className="desktop">
        <Row
          className="row-main"
          style={{ height: `calc(100vh - 140px)`, overflowY: "hidden" }}
        >
          <Col
            lg={4}
            sm={12}
            className="Column-interpoll"
            style={{ overflowY: "auto", height: "100%" }}
          >
            <div className="Abp-news">
              {details.map((ele) => (
                <div
                  key={ele.id}
                  onClick={() => setActiveId(ele.id)}
                  className={`location-card ${
                    activeId === ele.id ? "active" : ""
                  }`}
                >
                  <h2 className="lol">{ele.name}</h2>
                  <button className="name">{ele.store}</button>
                  <p className="address">{ele.address}</p>
                </div>
              ))}
            </div>
          </Col>

          <Col lg={8} sm={12} className="mapDiv">
            {activeLocation?.code || <p>Select a location to see the map</p>}
          </Col>
        </Row>
      </div>
      <div className="mobile">
        <Row
          className="row-main"
          style={{ height: `calc(100vh - 140px)`, overflowY: "hidden" }}
        >
          <Col
            lg={4}
            sm={12}
            className="Column-interpoll"
            style={{ overflowY: "auto", height: "100%" }}
          >
            <Carousel>
              {details.map((ele) => (
                <Carousel.Item key={ele.id}>
                  <div 
                    onClick={() => setActiveId(ele.id)}
                    className={`location-card ${
                      activeId === ele.id ? "active" : ""
                    }`}
                  >
                    <h2 className="lol">{ele.name}</h2>
                    <button className="name">{ele.store}</button>
                    <p className="address">{ele.address}</p>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
            <div className="mapDiv" style={{height:` calc(100vh - 272px)` }}>
               {activeLocation?.code || <p>Select a location to see the map</p>}
          </div>
          </Col>

       
        </Row>
      </div>
    </div>
  );
}
export default Addresses;


