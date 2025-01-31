import Square from "./Square";

const SQUARES = 195;

function Hoverboard() {
    return (
        <div className="container">
            {Array.from({ length: SQUARES }).map((_, idx) => (
                <Square key={idx} />
            ))}
        </div>
    );
}

export default Hoverboard;