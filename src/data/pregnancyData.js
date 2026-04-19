export const WEEKLY_PRODUCE = {
  1: { emoji: '🌱', name: 'маковое зернышко' },
  2: { emoji: '🌱', name: 'семя кунжута' },
  3: { emoji: '🌾', name: 'рисовое зерно' },
  4: { emoji: '🫐', name: 'черника' },
  5: { emoji: '🫛', name: 'горошина' },
  6: { emoji: '🍒', name: 'вишенка' },
  7: { emoji: '🫐', name: 'голубика' },
  8: { emoji: '🍇', name: 'виноградина' },
  9: { emoji: '🫒', name: 'оливка' },
  10: { emoji: '🍓', name: 'клубничка' },
  11: { emoji: '🍋', name: 'лайм' },
  12: { emoji: '🍑', name: 'персик' },
  13: { emoji: '🍎', name: 'яблоко' },
  14: { emoji: '🍊', name: 'апельсин' },
  15: { emoji: '🥭', name: 'манго' },
  16: { emoji: '🥑', name: 'авокадо' },
  17: { emoji: '🍐', name: 'груша' },
  18: { emoji: '🍠', name: 'батат' },
  19: { emoji: '🥕', name: 'морковь' },
  20: { emoji: '🍌', name: 'банан' },
  21: { emoji: '🌽', name: 'кукуруза' },
  22: { emoji: '🥒', name: 'огурец' },
  23: { emoji: '🍆', name: 'баклажан' },
  24: { emoji: '🥥', name: 'кокос' },
  25: { emoji: '🥬', name: 'салат' },
  26: { emoji: '🥔', name: 'картофель' },
  27: { emoji: '🥦', name: 'брокколи' },
  28: { emoji: '🫑', name: 'болгарский перец' },
  29: { emoji: '🎃', name: 'тыква' },
  30: { emoji: '🥬', name: 'капуста' },
  31: { emoji: '🍍', name: 'ананас' },
  32: { emoji: '🥬', name: 'пекинская капуста' },
  33: { emoji: '🥥', name: 'дыня' },
  34: { emoji: '🍈', name: 'мускусная дыня' },
  35: { emoji: '🍯', name: 'кокосовый орех' },
  36: { emoji: '🥬', name: 'ромэн' },
  37: { emoji: '🍉', name: 'мини-арбуз' },
  38: { emoji: '🎃', name: 'небольшая тыковка' },
  39: { emoji: '🍉', name: 'арбузик' },
  40: { emoji: '🚀', name: 'готов к стыковке' },
}

export const MOTIVATION_PHRASES = [
  'Мама, мы скоро увидимся.',
  'Твоя вселенная расширяется.',
  'Малыш уже на орбите любви.',
  'Готовимся к мягкой стыковке.',
  'Ты делаешь невероятную работу каждый день.',
  'Каждая неделя приближает к первой встрече.',
]

export function getProduceForWeek(week) {
  return (
    WEEKLY_PRODUCE[week] || {
      emoji: '✨',
      name: 'космическая искра',
    }
  )
}
