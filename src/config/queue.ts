import "@lib/VariableManager";

const availables = (process.env.QUEUE_AVAILABLES || '').split('|')

export default {
    url: process.env.QUEUE_URL,
    availables
}