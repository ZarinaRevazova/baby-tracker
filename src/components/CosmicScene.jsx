import { useFloatingMotion } from '../hooks/useFloatingMotion'

function CosmicScene({ week, produce, isEmpty }) {
  const motion = useFloatingMotion()

  return (
    <div className="cosmic-scene">
      <div className="mom-illustration" aria-hidden="true">
        🤰
      </div>
      <div className="baby-illustration" aria-hidden="true">
        👶🚀
      </div>

      <div
        className="produce-orbit"
        style={{
          transform: `translate(${motion.x}px, ${motion.y}px) rotate(${motion.rotate}deg)`,
        }}
      >
        <span className="produce-emoji" aria-hidden="true">
          {isEmpty ? '✨' : produce.emoji}
        </span>
      </div>

      <div className="scene-copy">
        <p className="scene-week">
          {isEmpty ? 'Введите дату старта миссии' : `${week} неделя`}
        </p>
        <p className="scene-produce">
          {isEmpty ? 'Размер малыша появится здесь' : `Размер как ${produce.name}`}
        </p>
      </div>
    </div>
  )
}

export default CosmicScene
