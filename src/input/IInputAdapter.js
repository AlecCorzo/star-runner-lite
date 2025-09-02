
export class IInputAdapter {
  /**
   * Adjunta controladores de entrada a acciones del juego.
   * actions = { left(), right(), stop(), jump(), pause() }
   * Debe devolver una función detach() para remover handlers.
   */
  attach(k, actions) { throw new Error("Not implemented"); }
}
