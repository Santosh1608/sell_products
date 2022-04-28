import nats from "node-nats-streaming";
import { TicketCreatedPublisher } from "./events/ticket-created-publisher";

const stan = nats.connect("ticketing", "abc", {
  url: "http://localhost:4222",
});

stan.on("connect", async () => {
  const publisher = new TicketCreatedPublisher(stan);
  await publisher.publish({ id: "1", title: "concert", price: 1000 });
});
