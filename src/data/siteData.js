import passengerLift from "../assets/images/passenger.png";
import freightLift from "../assets/images/freight.png";

import hospitalLift from "../assets/images/hospital.png";
import homeLift from "../assets/images/home.png";

import panoramicLift from "../assets/images/panoramic.png";
import highSpeedLift  from "../assets/images/highSpeed.png";


import carLift from "../assets/images/car.png";
import capsuleLift from "../assets/images/capsule.png";




export const IMG = {
hero: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85',
factory: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=85',

passenger: passengerLift,
freight: freightLift ,
hospital: hospitalLift,
home: homeLift,

panoramic: panoramicLift,
highSpeed: highSpeedLift ,
car: carLift,
capsule: capsuleLift,


mall: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=1200&q=85',
office: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85',
skyline: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=85',
plant: 'https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=1200&q=85',
corridor: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1200&q=85',
city: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=85',
team: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=85',
service: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=85',
project: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1800&q=85',
contact: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85',
}
export const products = [
{slug:'passenger-elevator', name:'Passenger Elevator', tag:'Sleek, high-capacity cabins engineered with PMSM Gearless machinery for smart office towers and premium residential developments.', image:IMG.passenger, desc:'Sleek office and high-rise passenger lifts designed with gearless PMSM motors for smooth, quiet and energy-efficient travel.'},
{slug:'freight-elevator', name:'Freight Elevator', tag:'Ultra-heavy duty freight solutions with reinforced mechanical structures. Built to withstand punishing industrial logistics.', image:IMG.freight, desc:'Reinforced load-bearing freight transit built for industrial logistics, factories and warehouses.'},
{slug:'hospital-elevator', name:'Hospital Elevator', tag:'Sized for smooth stretcher transit. Features micro-leveling accuracy, slow door closing, and sterile, quiet-ride cabin design.', image:IMG.hospital, desc:'Precision space for clinical emergency stretchers with smooth acceleration and reliable door control.'},
{slug:'home-lift', name:'Home Lift', tag:'Compact, stylish, single-phase lifts requiring zero overhead or pit space. Seamlessly integrated into luxury villas.', image:IMG.home, desc:'Whisper-quiet home lift solutions for compact single-phase residential spaces.'},


{slug:'panoramic-elevator', name:'Panoramic Elevator', tag:'Advanced multi-level parking solutions featuring precise mechanical structural guidance and auto-door gate coordination.', image:IMG.mall, desc:'A premium visual statement for malls, hotels and landmark buildings.'},
{slug:'high-speed-elevator', name:'High Speed Elevator', tag:'Aesthetic architectural glass capsules providing stunning external panoramas. Designed as dynamic visual elements.', image:IMG.office, desc:'Fast, stable vertical transport engineered for demanding commercial towers.'},

{slug:'High-Speed Elevator', name:'Panoramic Elevator', tag:'Supercharged transit operating up to 6.0 m/s. Integrated with smart dispatch controls and active vibration damping.', image:IMG.mall, desc:'A premium visual statement for malls, hotels and landmark buildings.'},
{slug:'Capsule Elevator', name:'High Speed Elevator', tag:'Unique custom geometry shapes including rounded, oval, and pentagonal glass cabins for bespoke architectural layouts.', image:IMG.office, desc:'Fast, stable vertical transport engineered for demanding commercial towers.'},

]
export const projects = [
{name:'Oberoi Mall Mumbai', type:'Commercial', year:'2025', location:'Mumbai, Maharashtra', units:'12 Lift Units Installed', image:IMG.mall},
{name:'Max Hospital Delhi', type:'Hospital', year:'2024', location:'New Delhi, NCR', units:'8 Lift Units Installed', image:IMG.corridor},
{name:'DLF CyberCity', type:'Commercial', year:'2025', location:'Gurgaon, Haryana', units:'24 Lift Units Installed', image:IMG.skyline},
{name:'Lodha World Towers', type:'Residential', year:'2024', location:'Mumbai, Maharashtra', units:'18 Lift Units Installed', image:IMG.city},
{name:'ITC Grand Chola', type:'Hospitality', year:'2023', location:'Chennai, Tamil Nadu', units:'10 Lift Units Installed', image:IMG.home},
{name:'Tata Steel Plant', type:'Industrial', year:'2025', location:'Jamshedpur, Jharkhand', units:'6 Lift Units Installed', image:IMG.plant},
]
