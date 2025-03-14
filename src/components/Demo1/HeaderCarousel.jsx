import { useState } from "react";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("London"); // Default active tab

  const handleTabClick = (cityName) => {
    setActiveTab(cityName);
  };

  return (
    <div>
      <button
        className="tablink"
        style={{ backgroundColor: activeTab === "London" ? "lightblue" : "" }}
        onClick={() => handleTabClick("London")}
      >
        London
      </button>
      <button
        className="tablink"
        style={{ backgroundColor: activeTab === "Paris" ? "lightblue" : "" }}
        onClick={() => handleTabClick("Paris")}
      >
        Paris
      </button>
      <button
        className="tablink"
        style={{ backgroundColor: activeTab === "Tokyo" ? "lightblue" : "" }}
        onClick={() => handleTabClick("Tokyo")}
      >
        Tokyo
      </button>

      <div
        id="London"
        className="tabcontent"
        style={{ display: activeTab === "London" ? "block" : "none" }}
      >
        <h2>London</h2>
        <p>London is the capital city of England.</p>
      </div>

      <div
        id="Paris"
        className="tabcontent"
        style={{ display: activeTab === "Paris" ? "block" : "none" }}
      >
        <h2>Paris</h2>
        <p>Paris is the capital of France.</p>
      </div>

      <div
        id="Tokyo"
        className="tabcontent"
        style={{ display: activeTab === "Tokyo" ? "block" : "none" }}
      >
        <h2>Tokyo</h2>
        <p>Tokyo is the capital of Japan.</p>
      </div>
    </div>
  );
};

export default TabComponent;
