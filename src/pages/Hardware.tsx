export default function Hardware() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold text-white mb-2">
        Hardware
      </h1>
      <p className="text-[var(--text-secondary)] mb-8">
        Custom ESP32-S3 smartwatch for biometric monitoring and activity tracking.
      </p>

      {/* Watch Images Gallery */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Aerovit Watch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="hud-box p-3 overflow-hidden">
            <img 
              src="/watch-img/watch.jpg" 
              alt="Aerovit Watch Front View" 
              className="w-full h-48 object-cover rounded-lg"
            />
            <p className="text-[var(--text-muted)] text-xs text-center mt-2">Front View</p>
          </div>
          <div className="hud-box p-3 overflow-hidden">
            <img 
              src="/watch-img/watch-worn.jpg" 
              alt="Aerovit Watch Worn on Wrist" 
              className="w-full h-48 object-cover rounded-lg"
            />
            <p className="text-[var(--text-muted)] text-xs text-center mt-2">Worn on Wrist</p>
          </div>
          <div className="hud-box p-3 overflow-hidden">
            <img 
              src="/watch-img/watch_on_case.jpg" 
              alt="Aerovit Watch with Case" 
              className="w-full h-48 object-cover rounded-lg"
            />
            <p className="text-[var(--text-muted)] text-xs text-center mt-2">With Case</p>
          </div>
        </div>
      </section>

      {/* Hardware Specifications */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Hardware Specifications</h2>
        <div className="hud-box p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Core Components</h3>
              <ul className="text-[var(--text-secondary)] space-y-2 text-sm">
                <li><span className="text-white">Board:</span> Waveshare ESP32-S3-Touch-LCD-1.69</li>
                <li><span className="text-white">Display:</span> 240×280 ST7789 with capacitive touch</li>
                <li><span className="text-white">Touch:</span> CST816S controller</li>
                <li><span className="text-white">Connectivity:</span> Bluetooth Low Energy (BLE)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Sensors</h3>
              <ul className="text-[var(--text-secondary)] space-y-2 text-sm">
                <li><span className="text-white">MAX30102:</span> Pulse oximeter (SpO2 + Heart Rate)</li>
                <li><span className="text-white">QMI8658:</span> 6-axis IMU (Accel + Gyro)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* IMU Configuration */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">IMU (QMI8658) Configuration</h2>
        <div className="hud-box p-5">
          <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Motion Sensing Parameters</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-[var(--primary-light)] border-b border-[var(--primary)]/20">
                <tr>
                  <th className="py-2 px-3">Parameter</th>
                  <th className="py-2 px-3">Value</th>
                  <th className="py-2 px-3">Description</th>
                </tr>
              </thead>
              <tbody className="text-[var(--text-secondary)]">
                <tr className="border-b border-[var(--primary)]/10">
                  <td className="py-2 px-3">I2C Address</td>
                  <td className="py-2 px-3 text-white">0x6B</td>
                  <td className="py-2 px-3">QMI8658 default</td>
                </tr>
                <tr className="border-b border-[var(--primary)]/10">
                  <td className="py-2 px-3">Accelerometer Range</td>
                  <td className="py-2 px-3 text-white">±4g</td>
                  <td className="py-2 px-3">Suitable for walking/running</td>
                </tr>
                <tr className="border-b border-[var(--primary)]/10">
                  <td className="py-2 px-3">Gyroscope Range</td>
                  <td className="py-2 px-3 text-white">±256°/s</td>
                  <td className="py-2 px-3">Wrist motion detection</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">Output Data Rate</td>
                  <td className="py-2 px-3 text-white">50Hz</td>
                  <td className="py-2 px-3">Balanced power/responsiveness</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="hud-box p-5 mt-4">
          <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Conversion Formulas</h3>
          <div className="space-y-4 text-sm">
            <div>
              <p className="text-white mb-1">Accelerometer</p>
              <code className="block bg-[var(--background)] p-3 rounded text-[var(--text-muted)] text-xs">
                Acceleration (g) = Raw_Value × 0.000122 g/LSB
              </code>
            </div>
            <div>
              <p className="text-white mb-1">Gyroscope</p>
              <code className="block bg-[var(--background)] p-3 rounded text-[var(--text-muted)] text-xs">
                Angular Velocity (°/s) = Raw_Value × 0.0078125 °/s/LSB
              </code>
            </div>
            <div>
              <p className="text-white mb-1">Magnitude</p>
              <code className="block bg-[var(--background)] p-3 rounded text-[var(--text-muted)] text-xs">
                magnitude = √(ax² + ay² + az²)
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Step Detection */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Step Detection Algorithm</h2>
        <p className="text-[var(--text-secondary)] mb-4 text-sm">
          High-Pass Filter + Zero-Crossing Detection for accurate step counting.
        </p>
        <div className="hud-box p-5">
          <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Algorithm Parameters</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-[var(--primary-light)] border-b border-[var(--primary)]/20">
                <tr>
                  <th className="py-2 px-3">Parameter</th>
                  <th className="py-2 px-3">Value</th>
                  <th className="py-2 px-3">Description</th>
                </tr>
              </thead>
              <tbody className="text-[var(--text-secondary)]">
                <tr className="border-b border-[var(--primary)]/10">
                  <td className="py-2 px-3">STEP_THRESHOLD</td>
                  <td className="py-2 px-3 text-white">0.15g</td>
                  <td className="py-2 px-3">Minimum amplitude for valid step</td>
                </tr>
                <tr className="border-b border-[var(--primary)]/10">
                  <td className="py-2 px-3">MIN_INTERVAL</td>
                  <td className="py-2 px-3 text-white">250ms</td>
                  <td className="py-2 px-3">Max cadence ~240 SPM</td>
                </tr>
                <tr className="border-b border-[var(--primary)]/10">
                  <td className="py-2 px-3">MAX_INTERVAL</td>
                  <td className="py-2 px-3 text-white">2000ms</td>
                  <td className="py-2 px-3">Min cadence ~30 SPM</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">HP_ALPHA</td>
                  <td className="py-2 px-3 text-white">0.96</td>
                  <td className="py-2 px-3">High-pass filter coefficient</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="hud-box p-5 mt-4">
          <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">High-Pass Filter Formula</h3>
          <code className="block bg-[var(--background)] p-3 rounded text-[var(--text-muted)] text-xs">
            hp_output = α × (hp_output_prev + raw - raw_prev)<br/>
            Where: α = τ / (τ + dt) = 0.5 / (0.5 + 0.02) = 0.96
          </code>
        </div>
      </section>

      {/* Activity Classification */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Activity Classification</h2>
        <p className="text-[var(--text-secondary)] mb-4 text-sm">
          Cadence-based classification using Tudor-Locke et al. (2018) walking cadence research.
        </p>
        <div className="hud-box p-5">
          <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Activity Thresholds</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-[var(--primary-light)] border-b border-[var(--primary)]/20">
                <tr>
                  <th className="py-2 px-3">Activity</th>
                  <th className="py-2 px-3">Cadence (SPM)</th>
                  <th className="py-2 px-3">MET Value</th>
                </tr>
              </thead>
              <tbody className="text-[var(--text-secondary)]">
                <tr className="border-b border-[var(--primary)]/10">
                  <td className="py-2 px-3">Idle/Stationary</td>
                  <td className="py-2 px-3 text-white">0 - 14</td>
                  <td className="py-2 px-3">1.3</td>
                </tr>
                <tr className="border-b border-[var(--primary)]/10">
                  <td className="py-2 px-3">Slow Walk</td>
                  <td className="py-2 px-3 text-white">15 - 79</td>
                  <td className="py-2 px-3">2.8</td>
                </tr>
                <tr className="border-b border-[var(--primary)]/10">
                  <td className="py-2 px-3">Normal Walk</td>
                  <td className="py-2 px-3 text-white">80 - 99</td>
                  <td className="py-2 px-3">3.5</td>
                </tr>
                <tr className="border-b border-[var(--primary)]/10">
                  <td className="py-2 px-3">Brisk Walk</td>
                  <td className="py-2 px-3 text-white">100 - 119</td>
                  <td className="py-2 px-3">4.3</td>
                </tr>
                <tr className="border-b border-[var(--primary)]/10">
                  <td className="py-2 px-3">Jogging</td>
                  <td className="py-2 px-3 text-white">120 - 149</td>
                  <td className="py-2 px-3">7.0</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">Running</td>
                  <td className="py-2 px-3 text-white">150+</td>
                  <td className="py-2 px-3">9.8</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Heart Rate & SpO2 */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Heart Rate & SpO2 (MAX30102)</h2>
        <div className="hud-box p-5">
          <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Sensor Configuration</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-[var(--primary-light)] border-b border-[var(--primary)]/20">
                <tr>
                  <th className="py-2 px-3">Parameter</th>
                  <th className="py-2 px-3">Value</th>
                  <th className="py-2 px-3">Description</th>
                </tr>
              </thead>
              <tbody className="text-[var(--text-secondary)]">
                <tr className="border-b border-[var(--primary)]/10">
                  <td className="py-2 px-3">LED Brightness</td>
                  <td className="py-2 px-3 text-white">60</td>
                  <td className="py-2 px-3">Optimized for battery life</td>
                </tr>
                <tr className="border-b border-[var(--primary)]/10">
                  <td className="py-2 px-3">Sample Average</td>
                  <td className="py-2 px-3 text-white">4</td>
                  <td className="py-2 px-3">Hardware averaging</td>
                </tr>
                <tr className="border-b border-[var(--primary)]/10">
                  <td className="py-2 px-3">Sample Rate</td>
                  <td className="py-2 px-3 text-white">100 Hz</td>
                  <td className="py-2 px-3">Adequate for HR detection</td>
                </tr>
                <tr className="border-b border-[var(--primary)]/10">
                  <td className="py-2 px-3">Pulse Width</td>
                  <td className="py-2 px-3 text-white">411μs</td>
                  <td className="py-2 px-3">Better SNR</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">Valid Range</td>
                  <td className="py-2 px-3 text-white">40-180 BPM</td>
                  <td className="py-2 px-3">Reject outliers</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="hud-box p-5 mt-4">
          <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">SpO2 Calculation</h3>
          <code className="block bg-[var(--background)] p-3 rounded text-[var(--text-muted)] text-xs">
            R = (AC_red / DC_red) / (AC_ir / DC_ir)<br/>
            SpO2 ≈ 110 - 25 × R
          </code>
          <p className="text-[var(--text-muted)] text-xs mt-2">
            Uses Maxim's calibrated lookup table for accurate readings.
          </p>
        </div>

        <div className="hud-box p-5 mt-4">
          <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Finger Detection (Hysteresis)</h3>
          <code className="block bg-[var(--background)] p-3 rounded text-[var(--text-muted)] text-xs">
            // Prevents flickering<br/>
            if (was_finger_detected)<br/>
            &nbsp;&nbsp;finger_detected = (IR_value &gt; 30000); // Lower threshold<br/>
            else<br/>
            &nbsp;&nbsp;finger_detected = (IR_value &gt; 50000); // Higher threshold
          </code>
        </div>
      </section>

      {/* Calorie Estimation */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Calorie Estimation</h2>
        <p className="text-[var(--text-secondary)] mb-4 text-sm">
          MET-based calculation using the Ainsworth Compendium of Physical Activities (2011).
        </p>
        <div className="hud-box p-5">
          <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Formula</h3>
          <code className="block bg-[var(--background)] p-3 rounded text-[var(--text-muted)] text-xs">
            Calories/minute = MET × Weight(kg) × 3.5 / 200<br/><br/>
            For 1-second updates:<br/>
            Calories/second = MET × Weight(kg) × 0.000292
          </code>
        </div>

        <div className="hud-box p-5 mt-4">
          <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Example (70kg user, Brisk Walking)</h3>
          <ul className="text-[var(--text-secondary)] space-y-1 text-sm">
            <li><span className="text-white">MET:</span> 4.3</li>
            <li><span className="text-white">Calories/min:</span> 4.3 × 70 × 3.5 / 200 = 5.27 cal/min</li>
            <li><span className="text-white">Calories/hour:</span> 316 cal/hour</li>
          </ul>
        </div>
      </section>

      {/* BLE Protocol */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">BLE Protocol</h2>
        <div className="hud-box p-5">
          <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Service & Characteristics</h3>
          <ul className="text-[var(--text-secondary)] space-y-2 text-sm">
            <li><span className="text-white">Service UUID:</span> <code className="text-[var(--text-muted)]">ae0v1t00-1234-5678-abcd-aerovitwatch</code></li>
            <li><span className="text-white">Biometric Data:</span> Read, Notify (SpO2, HR, Battery, Status)</li>
            <li><span className="text-white">Pairing Status:</span> Read, Write (Confirmation)</li>
          </ul>
        </div>

        <div className="hud-box p-5 mt-4">
          <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Biometric Data Packet (28 bytes)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-[var(--primary-light)] border-b border-[var(--primary)]/20">
                <tr>
                  <th className="py-2 px-3">Offset</th>
                  <th className="py-2 px-3">Type</th>
                  <th className="py-2 px-3">Field</th>
                </tr>
              </thead>
              <tbody className="text-[var(--text-secondary)]">
                <tr className="border-b border-[var(--primary)]/10">
                  <td className="py-2 px-3">0</td>
                  <td className="py-2 px-3">uint8</td>
                  <td className="py-2 px-3 text-white">SpO2 (0-100%)</td>
                </tr>
                <tr className="border-b border-[var(--primary)]/10">
                  <td className="py-2 px-3">1</td>
                  <td className="py-2 px-3">uint8</td>
                  <td className="py-2 px-3 text-white">Heart Rate (BPM)</td>
                </tr>
                <tr className="border-b border-[var(--primary)]/10">
                  <td className="py-2 px-3">2</td>
                  <td className="py-2 px-3">uint8</td>
                  <td className="py-2 px-3 text-white">Battery (%)</td>
                </tr>
                <tr className="border-b border-[var(--primary)]/10">
                  <td className="py-2 px-3">3</td>
                  <td className="py-2 px-3">uint8</td>
                  <td className="py-2 px-3 text-white">Status</td>
                </tr>
                <tr className="border-b border-[var(--primary)]/10">
                  <td className="py-2 px-3">12</td>
                  <td className="py-2 px-3">uint8</td>
                  <td className="py-2 px-3 text-white">Activity Type</td>
                </tr>
                <tr className="border-b border-[var(--primary)]/10">
                  <td className="py-2 px-3">13</td>
                  <td className="py-2 px-3">uint8</td>
                  <td className="py-2 px-3 text-white">Cadence (SPM)</td>
                </tr>
                <tr className="border-b border-[var(--primary)]/10">
                  <td className="py-2 px-3">14-15</td>
                  <td className="py-2 px-3">uint16</td>
                  <td className="py-2 px-3 text-white">Calories</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">16-19</td>
                  <td className="py-2 px-3">uint32</td>
                  <td className="py-2 px-3 text-white">Steps Today</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pairing Flow */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Pairing Flow</h2>
        <div className="hud-box p-5">
          <ol className="text-[var(--text-secondary)] space-y-2 text-sm list-decimal list-inside">
            <li>User taps "Pair with App" on watch dashboard</li>
            <li>Watch displays QR code and starts BLE advertising</li>
            <li>User scans QR code with Aerovit mobile app</li>
            <li>App extracts device ID and service UUID from QR</li>
            <li>App scans for BLE device matching the ID</li>
            <li>App connects and discovers services</li>
            <li>App writes "PAIR_OK" to pairing characteristic</li>
            <li>Watch confirms pairing and returns to dashboard</li>
            <li>Real-time biometric data streams over BLE</li>
          </ol>
        </div>

        <div className="hud-box p-5 mt-4">
          <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">QR Code Payload</h3>
          <code className="block bg-[var(--background)] p-3 rounded text-[var(--text-muted)] text-xs">
            {`{
  "id": "AABBCCDDEEFF",
  "name": "AerovitWatch-EEFF",
  "svc": "ae0v1t00-1234-5678-abcd-aerovitwatch",
  "type": "aerovit-watch"
}`}
          </code>
        </div>
      </section>

      {/* Gesture Detection */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Gesture Detection</h2>
        <div className="hud-box p-5">
          <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Raise-to-Wake Parameters</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-[var(--primary-light)] border-b border-[var(--primary)]/20">
                <tr>
                  <th className="py-2 px-3">Parameter</th>
                  <th className="py-2 px-3">Value</th>
                  <th className="py-2 px-3">Description</th>
                </tr>
              </thead>
              <tbody className="text-[var(--text-secondary)]">
                <tr className="border-b border-[var(--primary)]/10">
                  <td className="py-2 px-3">Raise Angle</td>
                  <td className="py-2 px-3 text-white">20°</td>
                  <td className="py-2 px-3">Minimum pitch angle</td>
                </tr>
                <tr className="border-b border-[var(--primary)]/10">
                  <td className="py-2 px-3">Hold Time</td>
                  <td className="py-2 px-3 text-white">300ms</td>
                  <td className="py-2 px-3">Must maintain position</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">Cooldown</td>
                  <td className="py-2 px-3 text-white">1000ms</td>
                  <td className="py-2 px-3">Prevent repeated triggers</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Scientific References */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Scientific References</h2>
        <div className="hud-box p-5">
          <ul className="text-[var(--text-secondary)] space-y-3 text-sm">
            <li>
              <span className="text-white">Tudor-Locke, C. et al. (2018)</span>
              <p className="text-[var(--text-muted)] text-xs mt-1">
                "How fast is fast enough? Walking cadence as a practical estimate of intensity" - British Journal of Sports Medicine
              </p>
            </li>
            <li>
              <span className="text-white">Ainsworth, B. E. et al. (2011)</span>
              <p className="text-[var(--text-muted)] text-xs mt-1">
                "Compendium of Physical Activities: A Second Update" - Medicine & Science in Sports & Exercise
              </p>
            </li>
            <li>
              <span className="text-white">Maxim Integrated (2017)</span>
              <p className="text-[var(--text-muted)] text-xs mt-1">
                "Guidelines for SpO2 Measurement Using the MAX30102" - Application Note 6845
              </p>
            </li>
            <li>
              <span className="text-white">Orendurff, M. S. et al. (2018)</span>
              <p className="text-[var(--text-muted)] text-xs mt-1">
                "Peak ground reaction force during walking and running" - Gait & Posture
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Pin Configuration */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Pin Configuration</h2>
        <div className="hud-box p-5">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-[var(--primary-light)] border-b border-[var(--primary)]/20">
                <tr>
                  <th className="py-2 px-3">Function</th>
                  <th className="py-2 px-3">GPIO</th>
                </tr>
              </thead>
              <tbody className="text-[var(--text-secondary)]">
                <tr className="border-b border-[var(--primary)]/10">
                  <td className="py-2 px-3">Display SPI CLK</td>
                  <td className="py-2 px-3 text-white">6</td>
                </tr>
                <tr className="border-b border-[var(--primary)]/10">
                  <td className="py-2 px-3">Display SPI MOSI</td>
                  <td className="py-2 px-3 text-white">7</td>
                </tr>
                <tr className="border-b border-[var(--primary)]/10">
                  <td className="py-2 px-3">Display DC</td>
                  <td className="py-2 px-3 text-white">4</td>
                </tr>
                <tr className="border-b border-[var(--primary)]/10">
                  <td className="py-2 px-3">Display CS</td>
                  <td className="py-2 px-3 text-white">5</td>
                </tr>
                <tr className="border-b border-[var(--primary)]/10">
                  <td className="py-2 px-3">Display RST</td>
                  <td className="py-2 px-3 text-white">8</td>
                </tr>
                <tr className="border-b border-[var(--primary)]/10">
                  <td className="py-2 px-3">Display Backlight</td>
                  <td className="py-2 px-3 text-white">15</td>
                </tr>
                <tr className="border-b border-[var(--primary)]/10">
                  <td className="py-2 px-3">I2C SDA (Touch/Sensor)</td>
                  <td className="py-2 px-3 text-white">11</td>
                </tr>
                <tr className="border-b border-[var(--primary)]/10">
                  <td className="py-2 px-3">I2C SCL (Touch/Sensor)</td>
                  <td className="py-2 px-3 text-white">10</td>
                </tr>
                <tr className="border-b border-[var(--primary)]/10">
                  <td className="py-2 px-3">Touch INT</td>
                  <td className="py-2 px-3 text-white">14</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">Touch RST</td>
                  <td className="py-2 px-3 text-white">13</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}
