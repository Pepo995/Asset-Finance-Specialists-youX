import { Strategy, ExtractJwt } from 'passport-jwt';
import passport from 'passport';
import { User } from '../models/User';

const jwtAuthStrategy = new Strategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.ACCESS_TOKEN_SECRET || 'TOP_SECRET',
  },
  (jwt_payload, done) => {
    try {
      const user = User.findOne({
        where: { id: jwt_payload.id },
      });

      if (!user) {
        return done(null, false);
      }

      return done(null, jwt_payload);
    } catch (error) {
      return done(null, false);
    }
  },
);

passport.use(jwtAuthStrategy);

export const authenticate = passport;
