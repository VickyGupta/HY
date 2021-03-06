import express from 'express';
import userRoutes from './user.route';
import authRoutes from './auth.route';
import postRoutes from './post.route';
import featureRoutes from './feature.route';
import userTypeRoutes from './userType.route';
import roleRoutes from './role.route';
import stateRoutes from './state.route';
const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount user routes at /users
router.use('/users', userRoutes);

// mount auth routes at /auth
router.use('/auth', authRoutes);

router.use('/posts', postRoutes);

router.use('/userType', userTypeRoutes);

router.use('/feature', featureRoutes);

router.use('/role', roleRoutes); 

router.use('/state', stateRoutes);

export default router;
