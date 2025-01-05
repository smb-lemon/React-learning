import { useState } from "react";
import { genTicket, sum} from "./helper";
import Ticket from "./Ticket.jsx";
import TicketButton from "./TicketButton.jsx";

export default function TicketLottery({n=3, winningSum=10}){
    let [ticket, setTicket] = useState(genTicket(n)); 
    let isWin = sum(ticket) === winningSum;

    let buyTicket = () => {
        setTicket(genTicket(n));
    }
    return (
        <div>
            <h1>Lottery Game!</h1>
            <div className="ticket">
            <Ticket ticket={ticket}/> 
            <TicketButton action={buyTicket} />
            </div>
            <br />
            
            <h3>{isWin && "Congratulations, You Won!"}</h3>
        </div>
    );
}