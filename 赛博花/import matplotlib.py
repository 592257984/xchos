import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
import numpy as np

fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')
ax.set_facecolor((0, 0, 0))  # Black background

theta = np.linspace(0, 2*np.pi, 1000)
z = np.linspace(-2, 2, 1000)
r = z**2 + 1
x = r * np.sin(theta)
y = r * np.cos(theta)

ax.plot(x, y, z, color='r')
ax.plot(x, -y, z, color='r')

plt.axis('off')  # No axes for a cooler look
plt.show()
