import * as Joi from 'joi';

export const platformStatisticsSchema = Joi.string().valid(
  'dao',
  'users',
  'quests',
  'reports',
  'disputes',
  'raiseView'
).label('PlatformStatistics');