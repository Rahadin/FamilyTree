import React from "react";

const CustomNode = ({ nodeDatum }) => {
  let member = nodeDatum?.nodeDatum;

  console.log(member?.spouse?.name);
  return (
    <g>
      {/* Render image and text inside a foreignObject */}
      <foreignObject x="-60" y="-50" width="150" height="100">
        <div
          style={{
            textAlign: "center",
            padding: "5px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        >
          <div>
            <img
              src={member?.photo}
              alt={member?.name || "No Name"}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                border: "2px solid #333",
              }}
              onError={(e) => {
                e.target.src =
                  "https://avatar.canva.com/avatars/users/9c33b441-17b5-45da-b517-7415680898e6/200.jpg";
              }}
            />
            <div
              style={{ marginTop: "5px", fontWeight: "bold", fontSize: "12px" }}
            >
              {member?.name || "Unnamed Node"}
            </div>
          </div>

          {/* Spouse (if available) */}
          {member?.spouse && (
            <>
              <span>❤️</span>
              <div>
                <img
                  src={member.spouse.photo}
                  alt={member.spouse.name}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    border: "2px solid #333",
                  }}
                  onError={(e) => {
                    e.target.src =
                      "https://avatar.canva.com/avatars/users/9c33b441-17b5-45da-b517-7415680898e6/200.jpg";
                  }}
                />
                <div style={{ marginTop: "5px", fontWeight: "bold", fontSize: "12px" }}>{member.spouse.name}</div>
              </div>
            </>
          )}
        </div>
      </foreignObject>
    </g>
  );
};

export default CustomNode;
