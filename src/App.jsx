import { useMemo, useState } from 'react'
import CosmicScene from './components/CosmicScene'
import MotivationToast from './components/MotivationToast'
import StatCard from './components/StatCard'
import { MOTIVATION_PHRASES, getProduceForWeek } from './data/pregnancyData'
import { usePregnancyCalculator } from './hooks/usePregnancyCalculator'
import './App.css'

function App() {
  const [lmpDate, setLmpDate] = useState('')

  const pregnancy = usePregnancyCalculator(lmpDate)

  const activeProduce = useMemo(
    () => getProduceForWeek(pregnancy.currentWeek),
    [pregnancy.currentWeek],
  )

  return (
    <main className="app-shell">
      <div className="nebula" />
      <div className="stars" />

      <section className="content">
        <header className="header">
          <div className="brand">
            <div className="brand-icon" aria-hidden="true">
              👽🍼
            </div>
            <div>
              <p className="eyebrow">Космический дневник беременности</p>
              <h1>Baby Tracker: Дата высадки</h1>
            </div>
          </div>
          <p className="header-copy">
            Твоя вселенная растет каждый день. Введи дату последней менструации,
            и мы покажем траекторию полета до встречи с малышом.
          </p>
        </header>

        <section className="grid">
          <article className="panel input-panel">
            <label htmlFor="lmp" className="label">
              Дата последней менструации (LMP)
            </label>
            <input
              id="lmp"
              type="date"
              value={lmpDate}
              onChange={(event) => setLmpDate(event.target.value)}
              className="date-input"
              max={pregnancy.maxLmpDate}
            />
            <p className="help-text">
              Рассчет основан на стандартной длительности беременности 280 дней.
            </p>
          </article>

          <article className="panel stats-panel">
            <div className="stats-grid">
              <StatCard
                title="Срок беременности"
                value={pregnancy.gestationLabel}
                hint="недель и дней"
              />
              <StatCard
                title="Предполагаемая дата родов"
                value={pregnancy.eddLabel}
                hint="ПДР"
              />
              <StatCard
                title="Текущая неделя"
                value={pregnancy.currentWeekLabel}
                hint="по космическому календарю"
              />
            </div>
          </article>

          <article className="panel scene-panel">
            <CosmicScene
              week={pregnancy.currentWeek}
              produce={activeProduce}
              isEmpty={!pregnancy.hasValidDate}
            />
          </article>
        </section>

        <MotivationToast
          week={pregnancy.currentWeek}
          phrases={MOTIVATION_PHRASES}
          active={pregnancy.hasValidDate}
        />
      </section>
    </main>
  )
}

export default App
