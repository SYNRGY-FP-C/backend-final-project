const { faker } = require("@faker-js/faker");

const addresses = [
  "Jl Raya Bogor Km 24/47-49",
  "Jl Lagoa Gg 3/1-3-5",
  "Jl Kol Sugiyono 15",
  "Jl Raya Kalirungkut 5",
  "Jl Pancakarya XI 39 C",
];
const kostType = ["PUTRA", "PUTRI", "CAMPURAN"];
const provinces = [
  "DKI Jakarta",
  "Jawa Barat",
  "Jawa Timur",
  "Sulawesi Selatan",
  "Kalimantan Selatan",
  "Bali",
  "Jawa Tengah",
  "Banten",
];
const districts = [
  "Jakarta Barat",
  "Jakarta Timur",
  "Banyumas",
  "Surakarta",
  "Tegal",
  "Lamongan",
  "Lumajang",
  "Jombang",
];
const cities = [
  "Jakarta",
  "Bandung",
  "Yogyakarta",
  "Bogor",
  "Makassar",
  "Depok",
  "Bekasi",
  "Tangerang",
];

const labels = ["KOST_HITS", "SUPERKOST", "KOST_TERBARU"];

const currentDate = () => {
  const date = new Date();
  return (
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1).toString().padStart(2, "0") +
    "-" +
    date.getDate().toString().padStart(2, "0") +
    " " +
    date.getHours().toString().padStart(2, "0") +
    ":" +
    date.getMinutes().toString().padStart(2, "0") +
    ":" +
    date.getSeconds().toString().padStart(2, "0") +
    "." +
    date.getMilliseconds().toString().padStart(3, "0")
  );
};

const generateKosts = (length) => {
  return Array.from({ length: length }).map((_) => ({
    owner_id: 147,
    kost_name: `Kost ${faker.name.firstName()}`,
    indoor_photo_url: faker.image.imageUrl(1280, 720, "apartment"),
    outdoor_photo_url: faker.image.imageUrl(1280, 720, "apartment"),
    additional_kost_rule: null,
    kost_type: faker.helpers.arrayElement(kostType),
    address: faker.helpers.arrayElement(addresses),
    city: faker.helpers.arrayElement(cities),
    province: faker.helpers.arrayElement(provinces),
    description: faker.commerce.productDescription(),
    district: faker.helpers.arrayElement(districts),
    address_note: "Kost murah",
    latitude: null,
    longitude: null,
    created_date: currentDate(),
    updated_date: currentDate(),
  }));
};

const generateRooms = (length) => {
  return Array.from({ length: length }).map((_) => ({
    owner_id: 147,
    kost_id: faker.helpers.arrayElement([49, 50, 51, 52, 53, 54]),
    price: 600000,
    indoor_bathroom: faker.helpers.arrayElement([true, false]),
    description: faker.commerce.productDescription(),
    label: faker.helpers.arrayElement(labels),
    name: `Kamar ${faker.name.firstName()}`,
    room_number: null,
    capacity: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
    width: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
    length: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
    quantity: faker.helpers.arrayElement([4, 5, 6, 7, 8]),
    available_room: faker.helpers.arrayElement([4, 5, 6, 7, 8]),
    max_person: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
    is_available: true,
    is_deleted: false,
    created_date: currentDate(),
    updated_date: currentDate(),
  }));
};

const generateImages = (latestId, length) => {
  return Array.from({ length: length }).map((_, index) => ({
    room_id: latestId - length + index + 1,
    image_url: faker.image.imageUrl(1280, 720, "apartment"),
  }));
};

module.exports = {
  generateKosts,
  generateRooms,
  generateImages,
};
