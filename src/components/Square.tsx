import { Button } from "semantic-ui-react";
import { deflateSync } from "zlib"


const Square: React.FC = () => {
    return (
        <Button className="board-square">
            x
        </Button>
    )
}



export default Square;