export default function guardrail(mathFunc) {
  const queue = [];
  try { //append func result to queue
    queue.push(mathFunc(), 'Guardrail was processed');
  } catch (error) { //catch and append error msg to queue
    queue.push(`Error: ${error.message}`, 'Guardrail was processed');
  }
  return queue;
}