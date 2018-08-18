import os
import hdf5_getters
import spotipy
import spotipy.util as util
import json, ast
from sklearn import tree
songs = []
tempo = []
X = []
Y = []
myFile = '../MillionSongSubset/data/B'

for path, dirs, files in os.walk(myFile):
    for filename in files:
        if filename == '.DS_Store':
            continue
        else:
            fullpath = os.path.join(path, filename)
            h5 = hdf5_getters.open_h5_file_read(fullpath)
            g = hdf5_getters.get_title(h5)
            t = hdf5_getters.get_tempo(h5)
            h5.close()
            songs.append(g)
            tempo.append(t)
            X.append([len(songs)-1, t])
            if t > 90:
                Y.append(1)
            else:
                Y.append(2)

scope = 'playlist-modify-public'
token = util.prompt_for_user_token('ameliabrowe', scope)

sp = spotipy.Spotify(auth=token)

track = [input("What song would you like to test?")]

features = sp.audio_features(track)
audio = features[0]
lst = ast.literal_eval(json.dumps(audio))
tempo = lst['tempo']
print tempo

clf = tree.DecisionTreeClassifier()
clf = clf.fit(X, Y)

print
if clf.predict([[0, tempo]]) == 1:
    print 'danceable'
else:
    print 'not danceable'
