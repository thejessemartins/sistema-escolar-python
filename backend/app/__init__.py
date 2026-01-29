from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from .config import Config

db = SQLAlchemy()

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    db.init_app(app)
    CORS(app) # Enable CORS for all routes

    from . import routes
    app.register_blueprint(routes.bp)

    with app.app_context():
        db.create_all()
        # Import models here to ensure they are known to SQLAlchemy
        from . import models
        create_default_user()

    return app

def create_default_user():
    from .models import User
    from werkzeug.security import generate_password_hash
    
    # Check if user exists
    user = User.query.filter_by(email='admin@admin.com').first()
    if not user:
        print("Criando usuário padrão: admin@admin.com / admin123")
        default_user = User(
            username='admin',
            name='Administrador',
            email='admin@admin.com',
            password_hash=generate_password_hash('admin123')
        )
        db.session.add(default_user)
        db.session.commit()
    else:
        print("Usuário padrão já existe.")
