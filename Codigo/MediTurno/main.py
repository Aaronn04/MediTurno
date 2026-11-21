import logging
from telegram import Update
from telegram.ext import Application, CommandHandler, MessageHandler, filters, ContextTypes
import responses

# CONFIGURACIÓN DEL TOKEN (Pega tu token de BotFather entre las comillas)
API_KEY = '8620072435:AAHtwk2swGtTxNRVpR7QXlmsFACj_C5sSgc'

# Configurar logs
logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s', level=logging.INFO)
logging.info('Starting Bot...')

async def start_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text('¡Hola! Yo soy el bot de MediTurno ¿Cómo estás?')

async def help_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text('Intenta escribir el problema que tengas. Trataré de resolver todas tus dudas.')

async def custom_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text('Este es un comando personalizado.')

async def handle_message(update: Update, context: ContextTypes.DEFAULT_TYPE):
    text = str(update.message.text).lower()
    logging.info(f'User ({update.message.chat.id}) dice: {text}')
    
    # Obtener respuesta del archivo responses.py
    response = responses.get_response(text)
    await update.message.reply_text(response)

async def error(update: Update, context: ContextTypes.DEFAULT_TYPE):
    logging.error(f'Update {update} causa de error {context.error}')

if __name__ == '__main__':
    # Crear la aplicación con el Token
    application = Application.builder().token(API_KEY).build()

    # Comandos
    application.add_handler(CommandHandler('start', start_command))
    application.add_handler(CommandHandler('help', help_command))
    application.add_handler(CommandHandler('custom', custom_command))

    # Mensajes de texto
    application.add_handler(MessageHandler(filters.TEXT, handle_message))

    # Logs de errores
    application.add_error_handler(error)

    # Correr el bot
    application.run_polling(poll_interval=1.0)