import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { AuthDto } from './dto/auth.dto';
import { GoogleAuthGuard } from 'src/guards/google-auth.guard';
import { GithubAuthGuard } from 'src/guards/github-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Endpoint para registrar un usuario
  @Post('register')
  async register(@Body() authDto: AuthDto) {
    return this.authService.register(authDto);
  }

  // Endpoint para iniciar sesión y recibir un JWT
  @Post('login')
  async login(@Body() authDto: AuthDto) {
    return this.authService.login(authDto);
  }

  // Proteger rutas con JWT
  @UseGuards(JwtAuthGuard)
  @Post('me')
  async getProfile(@Request() req) {
    return req.user; // Devuelve la info del usuario autenticado
  }

  // OAuth con Google
  @UseGuards(GoogleAuthGuard)
  @Post('google/login')
  async googleLogin() {
    return { msg: 'Redirigiendo a Google...' };
  }

  /* @UseGuards(GoogleAuthGuard)
  @Post('google/redirect')
  async googleRedirect(@Request() req) {
    return this.authService.googleLogin(req);
  } */

  // OAuth con GitHub
  @UseGuards(GithubAuthGuard)
  @Post('github/login')
  async githubLogin() {
    return { msg: 'Redirigiendo a GitHub...' };
  }

  /* @UseGuards(GithubAuthGuard)
  @Post('github/redirect')
  async githubRedirect(@Request() req) {
    return this.authService.githubLogin(req);
  } */
}
