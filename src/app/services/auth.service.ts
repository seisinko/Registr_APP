import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // Función para registrar un nuevo usuario
  register(username: string, password: string): boolean {
    const users = this.getUsers(); // Obtiene los usuarios almacenados

    // Verifica si el nombre de usuario ya está registrado
    if (users[username]) {
      console.error('El nombre de usuario ya está registrado.');
      return false; // Si ya existe, no se puede registrar
    }

    // Si el nombre de usuario es único, registramos el usuario
    users[username] = password; // Guarda el nombre de usuario con su contraseña
    this.saveUsers(users); // Guarda en localStorage
    return true; // Registro exitoso
  }

  // Función para iniciar sesión
  login(username: string, password: string): boolean {
    const users = this.getUsers(); // Obtiene los usuarios almacenados

    // Verifica si el usuario existe y la contraseña es correcta
    if (users[username] && users[username] === password) {
      this.loginUser(username); // Inicia sesión si las credenciales son correctas
      return true;
    }

    return false; // Si no coincide, el login es incorrecto
  }

  // Función para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    return !!localStorage.getItem('loggedInUser');  // Verifica si hay un usuario logueado
  }

  // Función para iniciar sesión (almacena el usuario logueado)
  loginUser(username: string): void {
    localStorage.setItem('loggedInUser', username); // Guarda el nombre de usuario en localStorage
  }

  // Función para cerrar sesión
  logout(): void {
    localStorage.removeItem('loggedInUser'); // Elimina el usuario logueado de localStorage
  }

  // Obtiene los usuarios almacenados desde localStorage
  private getUsers(): Record<string, string> {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : {}; // Devuelve un objeto vacío si no hay usuarios
  }

  // Guarda los usuarios en localStorage
  private saveUsers(users: Record<string, string>): void {
    localStorage.setItem('users', JSON.stringify(users)); // Almacena el objeto de usuarios
  }
}
