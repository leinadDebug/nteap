export const AddressForm = ({ onSave }: { onSave: () => void }) => {
  return (
    <div className="p-6">
      <div className="p-6">
        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Email Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-green-500 rounded-md focus:outline-none focus:border-green-600"
            />
          </div>

          {/* Confirm Email Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
          </div>

          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
          </div>

          {/* Company */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
          </div>

          {/* Country/Region */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Country/Region
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500 text-gray-500">
              <option>Select One</option>
            </select>
          </div>

          {/* Address Line 1 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address Line 1 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-green-500 rounded-md focus:outline-none focus:border-green-600"
            />
          </div>

          {/* Address Line 2 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address Line 2
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500 text-gray-500">
              <option>Select One</option>
            </select>
          </div>

          {/* City / Suburb */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City / Suburb
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
          </div>

          {/* State / Province */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              State / Province
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500 text-gray-500">
              <option>Select One</option>
            </select>
          </div>

          {/* ZIP / Postcode */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ZIP / Postcode <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end mt-6">
          <button
            onClick={onSave}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-2"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
