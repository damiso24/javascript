{
 "cells": [
  {
   "cell_type": "code",
   "execution_count": 1,
   "metadata": {},
   "outputs": [],
   "source": [
    "import pandas as pd\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 4,
   "metadata": {},
   "outputs": [
    {
     "data": {
      "application/json": {
       "cell": {
        "!": "OSMagics",
        "HTML": "Other",
        "SVG": "Other",
        "bash": "Other",
        "capture": "ExecutionMagics",
        "debug": "ExecutionMagics",
        "file": "Other",
        "html": "DisplayMagics",
        "javascript": "DisplayMagics",
        "js": "DisplayMagics",
        "latex": "DisplayMagics",
        "markdown": "DisplayMagics",
        "perl": "Other",
        "prun": "ExecutionMagics",
        "pypy": "Other",
        "python": "Other",
        "python2": "Other",
        "python3": "Other",
        "ruby": "Other",
        "script": "ScriptMagics",
        "sh": "Other",
        "svg": "DisplayMagics",
        "sx": "OSMagics",
        "system": "OSMagics",
        "time": "ExecutionMagics",
        "timeit": "ExecutionMagics",
        "writefile": "OSMagics"
       },
       "line": {
        "alias": "OSMagics",
        "alias_magic": "BasicMagics",
        "autoawait": "AsyncMagics",
        "autocall": "AutoMagics",
        "automagic": "AutoMagics",
        "autosave": "KernelMagics",
        "bookmark": "OSMagics",
        "cat": "Other",
        "cd": "OSMagics",
        "clear": "KernelMagics",
        "colors": "BasicMagics",
        "conda": "PackagingMagics",
        "config": "ConfigMagics",
        "connect_info": "KernelMagics",
        "cp": "Other",
        "debug": "ExecutionMagics",
        "dhist": "OSMagics",
        "dirs": "OSMagics",
        "doctest_mode": "BasicMagics",
        "ed": "Other",
        "edit": "KernelMagics",
        "env": "OSMagics",
        "gui": "BasicMagics",
        "hist": "Other",
        "history": "HistoryMagics",
        "killbgscripts": "ScriptMagics",
        "ldir": "Other",
        "less": "KernelMagics",
        "lf": "Other",
        "lk": "Other",
        "ll": "Other",
        "load": "CodeMagics",
        "load_ext": "ExtensionMagics",
        "loadpy": "CodeMagics",
        "logoff": "LoggingMagics",
        "logon": "LoggingMagics",
        "logstart": "LoggingMagics",
        "logstate": "LoggingMagics",
        "logstop": "LoggingMagics",
        "ls": "Other",
        "lsmagic": "BasicMagics",
        "lx": "Other",
        "macro": "ExecutionMagics",
        "magic": "BasicMagics",
        "man": "KernelMagics",
        "matplotlib": "PylabMagics",
        "mkdir": "Other",
        "more": "KernelMagics",
        "mv": "Other",
        "notebook": "BasicMagics",
        "page": "BasicMagics",
        "pastebin": "CodeMagics",
        "pdb": "ExecutionMagics",
        "pdef": "NamespaceMagics",
        "pdoc": "NamespaceMagics",
        "pfile": "NamespaceMagics",
        "pinfo": "NamespaceMagics",
        "pinfo2": "NamespaceMagics",
        "pip": "PackagingMagics",
        "popd": "OSMagics",
        "pprint": "BasicMagics",
        "precision": "BasicMagics",
        "prun": "ExecutionMagics",
        "psearch": "NamespaceMagics",
        "psource": "NamespaceMagics",
        "pushd": "OSMagics",
        "pwd": "OSMagics",
        "pycat": "OSMagics",
        "pylab": "PylabMagics",
        "qtconsole": "KernelMagics",
        "quickref": "BasicMagics",
        "recall": "HistoryMagics",
        "rehashx": "OSMagics",
        "reload_ext": "ExtensionMagics",
        "rep": "Other",
        "rerun": "HistoryMagics",
        "reset": "NamespaceMagics",
        "reset_selective": "NamespaceMagics",
        "rm": "Other",
        "rmdir": "Other",
        "run": "ExecutionMagics",
        "save": "CodeMagics",
        "sc": "OSMagics",
        "set_env": "OSMagics",
        "store": "StoreMagics",
        "sx": "OSMagics",
        "system": "OSMagics",
        "tb": "ExecutionMagics",
        "time": "ExecutionMagics",
        "timeit": "ExecutionMagics",
        "unalias": "OSMagics",
        "unload_ext": "ExtensionMagics",
        "who": "NamespaceMagics",
        "who_ls": "NamespaceMagics",
        "whos": "NamespaceMagics",
        "xdel": "NamespaceMagics",
        "xmode": "BasicMagics"
       }
      },
      "text/plain": [
       "Available line magics:\n",
       "%alias  %alias_magic  %autoawait  %autocall  %automagic  %autosave  %bookmark  %cat  %cd  %clear  %colors  %conda  %config  %connect_info  %cp  %debug  %dhist  %dirs  %doctest_mode  %ed  %edit  %env  %gui  %hist  %history  %killbgscripts  %ldir  %less  %lf  %lk  %ll  %load  %load_ext  %loadpy  %logoff  %logon  %logstart  %logstate  %logstop  %ls  %lsmagic  %lx  %macro  %magic  %man  %matplotlib  %mkdir  %more  %mv  %notebook  %page  %pastebin  %pdb  %pdef  %pdoc  %pfile  %pinfo  %pinfo2  %pip  %popd  %pprint  %precision  %prun  %psearch  %psource  %pushd  %pwd  %pycat  %pylab  %qtconsole  %quickref  %recall  %rehashx  %reload_ext  %rep  %rerun  %reset  %reset_selective  %rm  %rmdir  %run  %save  %sc  %set_env  %store  %sx  %system  %tb  %time  %timeit  %unalias  %unload_ext  %who  %who_ls  %whos  %xdel  %xmode\n",
       "\n",
       "Available cell magics:\n",
       "%%!  %%HTML  %%SVG  %%bash  %%capture  %%debug  %%file  %%html  %%javascript  %%js  %%latex  %%markdown  %%perl  %%prun  %%pypy  %%python  %%python2  %%python3  %%ruby  %%script  %%sh  %%svg  %%sx  %%system  %%time  %%timeit  %%writefile\n",
       "\n",
       "Automagic is ON, % prefix IS NOT needed for line magics."
      ]
     },
     "execution_count": 4,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "%lsmagic"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 15,
   "metadata": {},
   "outputs": [
    {
     "data": {
      "application/javascript": [
       "# // from data.js\n",
       "var sightings = data;\n",
       "element.text(sightings);\n"
      ],
      "text/plain": [
       "<IPython.core.display.Javascript object>"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "%%js\n",
    "# // from data.js\n",
    "var sightings = data;\n",
    "element.text(sightings);"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 14,
   "metadata": {},
   "outputs": [
    {
     "data": {
      "application/javascript": [
       "\n",
       "console.log(\"print hello\");\n"
      ],
      "text/plain": [
       "<IPython.core.display.Javascript object>"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "%%js\n",
    "\n",
    "console.log(\"print hello\");"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": []
  }
 ],
 "metadata": {
  "kernelspec": {
   "display_name": "pythondata",
   "language": "python",
   "name": "pythondata"
  },
  "language_info": {
   "codemirror_mode": {
    "name": "ipython",
    "version": 3
   },
   "file_extension": ".py",
   "mimetype": "text/x-python",
   "name": "python",
   "nbconvert_exporter": "python",
   "pygments_lexer": "ipython3",
   "version": "3.6.10"
  }
 },
 "nbformat": 4,
 "nbformat_minor": 4
}
