import React, {useState} from 'react'

export default function useThemeSwitcher() {
  const [switcher, setSwitcher] = useState(false);

  const themeSwitcher = () => setSwitcher(!switcher);

  return [switcher, themeSwitcher]
}
