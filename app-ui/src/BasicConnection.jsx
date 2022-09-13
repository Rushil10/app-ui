import createEngine, {
  DiagramModel,
  DefaultNodeModel,
} from "@projectstorm/react-diagrams";
import * as React from "react";
import { CanvasWidget } from "@projectstorm/react-canvas-core";
import { DemoCanvasWidget } from "./DemoCanvasWidget";

export default () => {
  var engine = createEngine();

  var model = new DiagramModel();

  var node1 = new DefaultNodeModel({
    name: "Node 1",
    color: "rgb(0,192,255)",
  });
  node1.setPosition(100, 100);
  let port1 = node1.addOutPort("Out");

  var node2 = new DefaultNodeModel("Node 2", "rgb(192,255,0)");
  let port2 = node2.addInPort("In");
  node2.setPosition(400, 100);

  let link1 = port1.link(port2);

  let models = model.addAll(node1, node2, link1);
  models.forEach((item) => {
    item.registerListener({
      eventDidFire: (event) => {
        console.log(event.entity, event.function, event.firing);
      },
    });
  });

  model.registerListener({
    eventDidFire: (event) => {
      console.log(event.entity, event.function, event.firing);
    },
  });

  engine.setModel(model);

  return (
    <DemoCanvasWidget>
      <CanvasWidget engine={engine} />
    </DemoCanvasWidget>
  );
};
