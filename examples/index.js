var mytemplate = new Template({
  branch: {
    color: '#000000',
    lineWidth: 4,
    spacingX: 50,
    mergeStyle: 'straight'
  },
  commit: {
    spacingY: -60,
    dot: {
      size: 12,
      strokeColor: '#000000',
      strokeWidth: 7
    },
    message: {
      color: 'black'
    }
  },
  arrow: {
    size: 16,
    offsetY: -2
  }
});

var mytemplate2 = new Template({
  colors: ['#979797', '#008fb5', 'f1c109'],
  branch: {
    lineWidth: 10,
    spacingX: 50
  },
  commit: {
    spacingY: -80,
    dot: {
      size: 14
    },
    message: {
      font: 'normal 14pt Arial',
    }
  },
});

var gitGraph = new GitGraph({
  template: mytemplate
});

var master = gitGraph.branch('master');
gitGraph.commit({
  message:'Initial commit' ,
  color: 'pink'
}); // Commit on HEAD Branch
gitGraph.commit();
gitGraph.commit();

var dev = gitGraph.branch({
  name: 'dev',
});
gitGraph.commit('Youhou \\o/');
gitGraph.commit({
  dotColor: 'white',
  dotSize: 10,
  dotStrokeWidth: 10,
  message: "Alors c'est qui le papa ?",
  author: "Me <me@planee.fr>"
});
gitGraph.commit();

//master.checkout();
var test = gitGraph.branch({
  name: 'test',
});
gitGraph.commit({
  message: 'test'
});
gitGraph.commit();
dev.commit().commit(); // Commit on 'dev' Branch
master.checkout();
gitGraph.author = 'Fabien0102 <fabien0102@planee.fr>'; // Change author
master.commit();
dev.merge();
test.commit();
test.merge(null, false); // Merge into HEAD without merge commit
test.commit('error'); // Error: You can't commit on merged branch
gitGraph.render();
