const Stats = ({ title, value, icon, trend }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 font-medium">{title}</p>
            <p className="text-2xl font-semibold mt-2">{value}</p>
            {trend && (
              <div className={`flex items-center mt-2 ${trend.type === 'increase' ? 'text-green-600' : 'text-red-600'}`}>
                {trend.type === 'increase' ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                )}
                <span className="ml-1 text-sm">{trend.value}%</span>
              </div>
            )}
          </div>
          {icon && (
            <div className="p-3 bg-indigo-100 rounded-full">
              {icon}
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default Stats;
  