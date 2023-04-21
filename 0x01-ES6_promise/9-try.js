export default function guardrail(mathFunction) {
  const queue = [];
  try {
    // append func result to queue
    queue.push(mathFunction(), 'Guardrail was processed');
  } catch (error) {
    // catch and append error msg to queue
    queue.push(`Error: ${error.message}`, 'Guardrail was processed');
  }
  return queue;
}
