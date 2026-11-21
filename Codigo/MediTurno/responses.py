import re

def process_message(message, response_array, response):
    list_message = re.findall(r'[\w\']+|[.,!?;]', message.lower())
    score = 0
    for word in list_message:
        if word in response_array:
            score = score + 1
    return [score, response]

def get_response(message):
    response_list = [
        process_message(message, ['hola', 'buen', 'dias', 'tardes', 'noches', 'saludos', 'que tal'], 
                        '¡Hola! Bienvenido al asistente virtual de MediTurno. ¿En qué puedo ayudarte hoy?'),
        process_message(message, ['chau', 'adios', 'luego', 'nos vemos', 'gracias'], 
                        '¡Muchas gracias por comunicarte con MediTurno! Que tengas un excelente día.'),
        process_message(message, ['sacar', 'solicitar', 'pedir', 'nuevo', 'turno', 'reserva'], 
                        'Para solicitar un nuevo turno médico, inicia sesión con tu usuario de Paciente en la plataforma web y dirígete a la sección "Solicitar Turno".'),
        process_message(message, ['ver', 'mis', 'consultar', 'turnos', 'asignados'], 
                        'Puedes consultar tus turnos programados ingresando a la sección "Mis Turnos" dentro de tu panel de Paciente en el sistema.'),
        process_message(message, ['cancelar', 'reprogramar', 'baja', 'modificar', 'cambiar'], 
                        'Si necesitas cancelar o reprogramar un turno, ingresa a la web. Recuerda que el sistema validará la disponibilidad para evitar superposiciones.'),
        process_message(message, ['medico', 'agenda', 'profesional', 'horario', 'atencion'], 
                        'Los profesionales de la salud pueden iniciar sesión en el panel correspondiente para consultar su agenda médica y turnos asignados en tiempo real.'),
        process_message(message, ['especialidad', 'especialidades', 'clinica', 'pediatria', 'cardiologia'], 
                        'En MediTurno contamos con múltiples especialidades. Puedes consultar las disponibilidades filtrando por fecha o especialista en la web.'),
        process_message(message, ['admin', 'administrador', 'gestion', 'control', 'supervisar'], 
                        'Si eres administrador del centro médico, tienes acceso total para gestionar pacientes, registrar profesionales, modificar horarios y supervisar todos los turnos registrados.'),
        process_message(message, ['ayuda', 'soporte', 'funciona', 'sistema', 'problema'], 
                        'MediTurno es un sistema web optimizado para la gestión digital de turnos médicos en instituciones de salud públicas y privadas. Prueba consultando sobre: "solicitar turno", "mis turnos" o "médicos".')
    ]
    response_scores = []
    for response in response_list:
        response_scores.append(response[0])
        
    winning_response = max(response_scores)
    
    if winning_response == 0:
        bot_response = 'Lo siento, no logré entender tu consulta. Por favor, intenta usando palabras clave como: turno, solicitar, ver mis turnos, especialidades o ayuda.'
    else:
        matching_response = response_list[response_scores.index(winning_response)]
        bot_response = matching_response[1]
        
    return bot_response