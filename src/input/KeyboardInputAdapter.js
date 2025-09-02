import { IInputAdapter } from "./IInputAdapter.js";

export class KeyboardInputAdapter extends IInputAdapter {
  attach(k, actions) {
    const cleanups = [];


    function add(handler) {
      if (typeof handler === "function") {
        cleanups.push(handler);
      }
    }

    // izquierda
    add(k.onKeyDown("left", actions.left));
    add(k.onKeyDown("a", actions.left));
    add(k.onKeyRelease("left", actions.stop));
    add(k.onKeyRelease("a", actions.stop));

    // derecha
    add(k.onKeyDown("right", actions.right));
    add(k.onKeyDown("d", actions.right));
    add(k.onKeyRelease("right", actions.stop));
    add(k.onKeyRelease("d", actions.stop));

    // saltar
    add(k.onKeyPress("space", actions.jump));
    add(k.onKeyPress("up", actions.jump));
    add(k.onKeyPress("w", actions.jump));

    // pausa / menú
    add(k.onKeyPress("escape", actions.pause));

    // devolvemos función de limpieza
    return () => {
      cleanups.forEach((off) => {
        if (typeof off === "function") off();
      });
    };
  }
}
