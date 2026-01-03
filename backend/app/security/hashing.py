import hashlib

class HashService:
    """Service pour le hashage des mots de passe."""
    
    @staticmethod
    def hash_password(password):
        """
        Génère le hash SHA-256 d'un mot de passe.
        
        Args:
            password (str): Le mot de passe à hasher
        
        Returns:
            str: Le hash SHA-256 en format hexadécimal
        """
        if not password:
            raise ValueError("Le mot de passe ne peut pas être vide")
        
        # Convertir le mot de passe en bytes
        password_bytes = password.encode('utf-8')
        
        # Créer le hash SHA-256
        sha256_hash = hashlib.sha256(password_bytes)
        
        # Retourner le hash en format hexadécimal
        return sha256_hash.hexdigest()
    
    @staticmethod
    def verify_password(password, password_hash):
        """
        Vérifie si un mot de passe correspond à un hash.
        
        Args:
            password (str): Le mot de passe à vérifier
            password_hash (str): Le hash à comparer
        
        Returns:
            bool: True si le mot de passe correspond, False sinon
        """
        return HashService.hash_password(password) == password_hash