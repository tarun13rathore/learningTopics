import React from "react";
import { useState } from "react";

const Nested = () => {
  const [formData, setFormData] = useState({
    lineItem: [
      {
        name: "",
        city: "",
        comment: "",
      },
    ],
  });

  console.log(formData);
  return (
    <div>
      {formData?.lineItem?.map((i, index) => {
        return (
          <div key={index}>
            <div>
              <label>Name</label>
              <input
                type="text"
                value={formData.lineItem[index].name}
                onChange={(e) => {
                  let temp = [...formData.lineItem];
                  temp[index].name = e.target.value;
                  setFormData({ ...formData, lineItem: temp });
                }}
              />
            </div>
            <div>
              <label>City</label>
              <input
                type="text"
                value={formData.lineItem[index].city}
                onChange={(e) => {
                  let temp = [...formData.lineItem];
                  temp[index].city = e.target.value;
                  setFormData({ ...formData, lineItem: temp });
                }}
              />
            </div>
            <div>
              <label>Comment</label>
              <input
                value={formData.lineItem[index].comment}
                type="text"
                onChange={(e) => {
                  let temp = [...formData.lineItem];
                  temp[index].comment = e.target.value;
                  setFormData({ ...formData, lineItem: temp });
                }}
              />
            </div>
            {formData?.lineItem.length > 1 && (
              <div>
                <p
                  onClick={() => {
                    setFormData({
                      ...formData,
                      lineItem: formData.lineItem?.filter(
                        (_, i) => i !== index
                      ),
                    });
                  }}
                >
                  X
                </p>
              </div>
            )}
          </div>
        );
      })}

      <button
        onClick={() => {
          setFormData({
            ...formData,
            lineItem: [
              ...formData.lineItem,
              {
                name: "",
                city: "",
                comment: "",
              },
            ],
          });
        }}
      >
        add
      </button>
    </div>
  );
};

export default Nested;
