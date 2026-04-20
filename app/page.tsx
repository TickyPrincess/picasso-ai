import GenerativeCanvas from '@/components/GenerativeCanvas'
import EntryScene from '@/components/EntryScene'
import Manifesto from '@/components/Manifesto'
import CapabilityPlanes from '@/components/CapabilityPlanes'
import TerminalPoem from '@/components/TerminalPoem'
import ClosingFrame from '@/components/ClosingFrame'
import NoiseTexture from '@/components/NoiseTexture'
import CustomCursor from '@/components/CustomCursor'

export default function Home() {
  return (
    <>
      <CustomCursor />
      <NoiseTexture />
      <GenerativeCanvas />
      <main className="relative z-10">
        <EntryScene />
        <Manifesto />
        <CapabilityPlanes />
        <TerminalPoem />
        <ClosingFrame />
      </main>
    </>
  )
}
