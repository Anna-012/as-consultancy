import { Phone, Mail, MapPin } from "lucide-react";

const Address = () => {
  return (
    <div className="space-y-8">

      {/* Address */}
      <div className="flex space-x-4">
        <div className="bg-purple-100 text-purple-700 p-3 rounded-lg">
          <MapPin className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Address</h3>
          <p className="text-gray-600">Shop No. 8, Pradhan Market, Kichha</p>
        </div>
      </div>

      {/* Phone */}
      <div className="flex space-x-4">
        <div className="bg-purple-100 text-purple-700 p-3 rounded-lg">
          <Phone className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
          <a
            href="tel:+917983790498"
            className="text-gray-600 hover:text-purple-700 transition"
          >
            +91 7983790498
          </a>
        </div>
      </div>

      {/* Email */}
      <div className="flex space-x-4">
        <div className="bg-purple-100 text-purple-700 p-3 rounded-lg">
          <Mail className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Email</h3>
          <a
            href="mailto:asconsultancyuttarakhand@gmail.com"
            className="text-gray-600 hover:text-purple-700 transition break-all"
          >
            asconsultancyuttarakhand@gmail.com
          </a>
        </div>
      </div>

    </div>
  );
};

export default Address;
